import React, { useEffect, useState } from 'react';
import { getServices } from '../services/data';
import { AdminCard } from '../../base/adminCard';
import HeadingContainer from '../../base/headingContainer';
import './style.scss';

export default function Admin() {
  const [data, setData] = useState();
  const [changes, setChanges] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await getServices();
        setData(jsonData.services);
      } catch (error) {
        console.error('Error in fetchData: ', error);
      } 
    };
    console.log('Changes: ', changes);
    fetchData();
  }, [changes]);

  function toggleChanges() {
    setChanges(!changes);
  }

  function sortDataByOrder(data) {
    return data.sort((a, b) => {
      return a.order - b.order;
    });
  }

  function groupDataByCategory(data) {
    const groupedData = {};
    data.forEach((item) => {
      if (!groupedData[item.category]) {
        groupedData[item.category] = [];
      }
      groupedData[item.category].push(item);
    });
    return groupedData;
  }

  const renderCardsByCategory = () => {
    console.log('Rerender');
    if (!data) return null;
    const groupedData = groupDataByCategory(data);
    return Object.keys(groupedData).map((category) => (
      <div key={category} className="category-container card">
        <h2>{category}</h2>
        <div className="cards-container">
          {sortDataByOrder(groupedData[category]).map((item) => (
            <AdminCard key={item.id} item={item} action={toggleChanges} />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <main>
      <HeadingContainer heading={'Admin'} />
      <article className="admin__cards-container">
        {renderCardsByCategory()}
      </article>
    </main>
  );
}
