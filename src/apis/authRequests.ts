import { ILoginData } from '@/types/user';

import client from './axios';


export const loginRequest = async (params: ILoginData) => {
  const response = await client.post('/login', params);

  return response.data;
};
