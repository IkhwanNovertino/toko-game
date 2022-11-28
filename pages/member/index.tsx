import jwtDecode from 'jwt-decode';
import React from 'react';
import OverviewContent from '../../components/organism/overview-content';
import SideBar from '../../components/organism/sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';

function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

export default Overview;

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
