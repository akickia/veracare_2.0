const baseURL = `${import.meta.env.VITE_API_URL}/services/`;

const token = localStorage.getItem('token');
export async function addService(img, newItem) {
  console.log('Added item');
  const parsedItem = JSON.stringify(newItem);
  const item = btoa(parsedItem);
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': img.type,
    Filename: img.name,
    Item: item,
  };

  try {
    const response = await fetch(baseURL + 'add', {
      method: 'POST',
      headers: headers,
      body: img,
    });
    return response;
  } catch (error) {
    console.error('Error at adding: ', error);
    throw error;
  }
}
