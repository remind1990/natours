/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    const stripe = Stripe(
      'pk_test_51NCq8TD0X1ccdRaYdZyz6hTHWz7DtJRdWvEaYdrKA1kd3j2Ws0XnW54NmcuFkMxgakBqKPKcKVPTPCiTObeCmWn000Kn3lOGuu'
    );
    // 1) Get checkout session from API
    const session = await axios.get(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
