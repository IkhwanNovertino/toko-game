import axios from 'axios';
// import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGame = async () => {
  const END_POINT = `players/landingpage`;

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};

export const getDetailVoucher = async (id: string) => {
  const END_POINT = `players/${id}/detail`;

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};

export const getGameCategory = async () => {
  const END_POINT = 'players/category';

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
};
