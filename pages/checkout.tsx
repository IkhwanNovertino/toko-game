import Image from "next/image";
import jwtDecode from "jwt-decode";
import CheckoutConfirmation from "../components/organism/checkout-confirm";
import CheckoutDetail from "../components/organism/checkout-detail";
import CheckoutItem from "../components/organism/checkout-item";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";

interface CheckoutProps {
  user: UserTypes;
}

// eslint-disable-next-line no-unused-vars
const Checkout = function ({ user }: CheckoutProps) {
  return (
    <>
      {/* <!-- Checkout Content --> */}
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
};

export default Checkout;

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

  const IMG = process.env.NEXT_PUBLIC_IMG;
  dataUserFromPayload.avatar = `${IMG}/${dataUserFromPayload.avatar}`;

  return {
    props: {
      user: dataUserFromPayload,
    },
  };
}
