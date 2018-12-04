import axios from 'axios';

export const loginUser = (formUser) => {
  return axios.post(
    'http://localhost:8000/rest-auth/login/',
    formUser
  );
}

export const logoutUser = (userId) => {
  return axios.post(
    `http://localhost:8000/api/users/${userId}/`
  );
}

export const signupUser = (formUser) => {
  return axios.post(
    'http://localhost:8000/rest-auth/registration/',
    formUser
  );
}