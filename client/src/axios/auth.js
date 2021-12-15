import axios from 'axios';

export const getUserAxios = () =>
  axios({
    method: 'get',
    withCredentials: true,
    url: '/user',
  });

export const signInAxios = (data) => axios.post('/signin', data);

export const signUpAxios = (data) => axios.post('/signup', data);

export const logoutAxios = () => axios.delete('/user');
