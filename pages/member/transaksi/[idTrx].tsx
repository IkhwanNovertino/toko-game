import jwtDecode from 'jwt-decode';
import React from 'react';
import SideBar from '../../../components/organism/sidebar';
import TransactionDetailContent from '../../../components/organism/transactions-detail-content';
import { JWTPayloadTypes, TransactionsTypes, UserTypes } from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface TransactionDetailProps {
  transactionDetail: TransactionsTypes,
}

function TransactionDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  // console.log('data: ', transactionDetail);

  return (
    <>
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent data={transactionDetail} />
    </>
  );
}

export default TransactionDetail;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string,
    }
  },
  params: {
    idTrx: string,
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  // console.log('idTrx: >>>', idTrx);
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

  const IMG = process.env.NEXT_PUBLIC_IMG;
  dataUserFromPayload.avatar = `${IMG}/${dataUserFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
