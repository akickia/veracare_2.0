import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const url =
  'https://ppssjc8azk.execute-api.eu-north-1.amazonaws.com/api/veracare';

//Check token
export function checkToken() {
  const token = localStorage.getItem('token') || undefined;
  const key = localStorage.getItem('key');
  if (token && token != undefined) {
    const decoded = jwtDecode(token);
    const currentTime = new Date().getTime() / 1000;
    if (decoded.exp - currentTime <= 0 || decoded.code != key) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
//Get services
export async function getServices() {
  try {
    const response = await axios.get(url + '/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
}

//Login function
export async function checkLogin(body) {
  try {
    const response = await axios.post(url + '/users/login', body, {
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

//Add service from adminpage
export async function addService(img, newItem) {
  const token = localStorage.getItem('token');
  const parsedItem = JSON.stringify(newItem);
  const item = btoa(parsedItem);
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': img.type,
    Filename: img.name,
    Item: item,
  };

  try {
    const response = await fetch(url + '/services/add', {
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

//Update service from adminpage
export async function updateService(img, newItem) {
  const token = localStorage.getItem('token');

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
    const response = await fetch(url + '/services/update/' + newItem.id, {
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

//Delete service from adminpage
export async function deleteService(id, category) {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.delete(
      url + '/services/delete/' + category + '/' + id,

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
