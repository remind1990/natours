/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signIn = async (name, email, password, passwordConfirm) => {
  console.log('hello from login');
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'You are Signed in successfully!', 1);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
