import jwtDecode from 'jwt-decode';
import React from 'react';
import SideBar from '../../../components/organism/sidebar';
import TransactionDetailContent from '../../../components/organism/transactions-detail-content';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

function TransactionDetail() {
  return (
    <>
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent />
    </>
  );
}

export default TransactionDetail;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string,
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString('ascii');

  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const dataUserFromPayload: UserTypes = payload.player;

  // console.log(jwtToken);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  dataUserFromPayload.avatar = `${IMG}/${dataUserFromPayload.avatar}`;

  return {
    props: {
      user: dataUserFromPayload,
    },
  };
}
