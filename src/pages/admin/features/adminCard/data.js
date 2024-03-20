import axios from 'axios';
const baseURL = `${import.meta.env.VITE_API_URL}/services/`;

const token = localStorage.getItem('token');
export async function updateService(img, newItem) {
  const parsedItem = JSON.stringify(newItem);
  const item = btoa(parsedItem);
  let headers;
  if (img) {
    headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': img.type,
      Filename: img.name,
      Item: item,
    };
  } else {
    headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Item: item,
    };
  }

  try {
    const response = await fetch(baseURL + 'update/' + newItem.id, {
      method: 'POST',
      headers: headers,
      body: img ? img : '',
    });
    return response;
  } catch (error) {
    console.error('Error at updating: ', error);
    throw error;
  }
}

export async function deleteService(id, category) {
  console.log(id, category);
  try {
    const response = await axios.delete(
      baseURL + 'delete/' + category + '/' + id,

      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Error at deleting: ', error);
    throw error;
  }
}
