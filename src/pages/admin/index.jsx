import React, { useEffect, useState } from 'react';
import { getServices } from '../services/data';
import { AdminCard } from '../../base/adminCard';

export default function Admin() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await getServices();
        setData(jsonData.services);
      } catch (error) {
        console.error('Error in fetchData: ', error);
      }
    };
    fetchData();
  }, []);

  function sortDataByOrder(data) {
    return data.sort((a, b) => {
      return a.order - b.order;
    });
  }

  const cardsEl =
    data &&
    sortDataByOrder(
      data.map((item, i) => {
        return <AdminCard item={item} key={i}></AdminCard>;
      })
    );
  return (
    <main>
      <h1>Admin</h1>
      {cardsEl && cardsEl}
    </main>
  );
}
