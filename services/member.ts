import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getMemberTransaction = async (valueParams: string) => {
  let params = '';
  if (valueParams === 'all') {
    params = ``;
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export const getTransactionDetail = async (id: string, serverToken: string) => {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken,
  });
};

export const updateProfile = async (id: string, data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};
