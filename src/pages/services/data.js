import axios from 'axios';

export async function getServices() {
  try {
    const response = await axios.get(
      'https://ppssjc8azk.execute-api.eu-north-1.amazonaws.com/api/veracare/services'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
}
