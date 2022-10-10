import axios from '../api';

export const getUser = () => {
  return axios.get('/user');
};

export const registerUser = (data) => {
  return axios.post('auth/register', data);
};

export const loginUser = (data)=> {
  return axios.post('auth/login', data);
};

export const photoUser = (data) => {
  return axios.put('user/uploadphoto', data);
};

export const updateUser = (data) => {
  return axios.put('user/edit', data);
};