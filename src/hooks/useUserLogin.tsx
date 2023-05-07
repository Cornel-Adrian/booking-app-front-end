import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

type LoginData = {
  email: string;
  password: string;
};


const postUserData = async (data: LoginData) => {
  const res = await axiosInstance.post("auth/login", data).then((res) => {

    console.log('Response: ' + JSON.stringify(res.data))
    return {
      // Change the path of reading the values from response as per your backend reponse
      auth_token: res.data['accessToken'],
      refresh_token: res.data['refreshToken'],
    };
  });

  return res;
};

export const useUserLogin = () => {
  return useMutation((data: LoginData) => postUserData(data), {});
};
