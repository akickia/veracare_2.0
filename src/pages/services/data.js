import axios from 'axios';
const url = import.meta.env.VITE_API_URL + '/services';
export async function getServices() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
}
