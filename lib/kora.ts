import axios from 'axios';

const KORA_SECRET_KEY = process.env.KORA_SECRET_KEY;
const KORA_PUBLIC_KEY = process.env.NEXT_PUBLIC_KORA_PUBLIC_KEY;
const BASE_URL = 'https://api.korapay.com/merchant/api/v1';

export const initializePayment = async (
  amount: number,
  currency: string = 'NGN',
  email: string,
  reference: string,
  callbackUrl: string
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/charges/initialize`,
      {
        amount,
        currency,
        customer: {
          email,
        },
        reference,
        redirect_url: callbackUrl,
        channels: ['card', 'bank_transfer', 'mobile_money'],
      },
      {
        headers: {
          Authorization: `Bearer ${KORA_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Kora Payment Initialization Error:', error);
    throw error;
  }
};

export const verifyPayment = async (reference: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/charges/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${KORA_SECRET_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Kora Payment Verification Error:', error);
    throw error;
  }
};
