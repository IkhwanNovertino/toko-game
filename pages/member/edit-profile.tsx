import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/Input';
import SideBar from '../../components/organism/sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';

function EditProfile() {
  const [user, setUser] = useState({
    id: '',
    avatar: '',
    name: '',
    email: '',
  });
  // const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const dataUserFromPayload: UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_IMG;
      dataUserFromPayload.avatar = `${IMG}/${dataUserFromPayload.avatar}`;

      setUser(dataUserFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append('name', user.name);
    data.append('image', user.avatar);

    const response = await updateProfile(user.id, data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Data berhasil diubah. Redirect ke sign-in!');
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };

  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img src={imagePreview} width={120} height={120} style={{ borderRadius: "100%" }} alt="upload" />
                    ) : (
                      <img src={user.avatar} width={120} height={120} style={{ borderRadius: "100%" }} alt="upload" />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img: any = event!.target!.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="FullName"
                  value={user.name}
                  onChange={(event: any) => {
                    setUser({
                      ...user,
                      name: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export default EditProfile;
