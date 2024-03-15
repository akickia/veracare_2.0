import axios from 'axios';

export async function checkLogin(url, body) {
  console.log(body);
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
