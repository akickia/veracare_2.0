import axios from 'axios';
const url = import.meta.env.VITE_API_URL + '/users/login';
export async function checkLogin(body) {
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error at login: ', error);
    throw error;
  }
}
