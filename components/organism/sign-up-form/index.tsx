import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
  };

  const onSubmit = () => {
    const userForm = {
      name,
      email,
      password,
    };
    if (!name || !email || !password) {
      toast.error('nama, email, dan password wajib diisi!!');
    } else {
      localStorage.setItem('user-form', JSON.stringify(userForm));
      router.push('/sign-up-photo');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-50">
        <label
          htmlFor="name"
          className={className.label}
        >
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label
          htmlFor="email"
          className={className.label}
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="pt-30">
        <label
          htmlFor="password"
          className={className.label}
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">

        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue
        </button>

        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign In
        </a>
      </div>
    </>
  );
}
