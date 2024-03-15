import axios from 'axios';

export async function updateService(body) {
  const url = `${import.meta.env.VITE_API_URL}/services/update/${body.id}`;
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  } catch (error) {
    console.error('Error at updating: ', error);
    throw error;
  }
}
