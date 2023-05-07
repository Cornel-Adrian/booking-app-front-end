import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

type RegisterData = {
  email: string;
  password: string;
  name: string;
};

const postUserData = async (data: RegisterData) => {
  const res = await axiosInstance.post("users/create", data).then((res) => {
    console.log('Response: ' + JSON.stringify(res.data))
  }).catch((err)=>{
    console.log('Shit happened');
  });

  return res;
};

export const useUserRegister = () => {
  return useMutation((data: RegisterData) => postUserData(data), {});
};
