import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const dataUserFromPayload: UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_IMG;
      dataUserFromPayload.avatar = `${IMG}/${dataUserFromPayload.avatar}`;
      // console.log("payload: ", dataUserFromPayload);

      setUser(dataUserFromPayload);
      // console.log("user: ", user);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img src={user.avatar || `/img/avatar-1.png`} width={90} height={90} className="img mb-20" style={{ borderRadius: "100%" }} />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
