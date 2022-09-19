import axios from 'axios';

export const getFeaturedGame = async () => {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const END_POINT = 'players/landingpage'

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`)
  const axiosResponse = res.data;
  
  return axiosResponse.data
}

export const getDetailVoucher = () => {
  return null
}