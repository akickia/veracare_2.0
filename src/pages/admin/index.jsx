import React, { useEffect, useState } from 'react';
import { checkToken, getServices } from '../../core/functions/data';
import { AdminCard } from './features/adminCard';
import HeadingContainer from '../../base/headingContainer';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AddService from './features/addService';

export default function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [changes, setChanges] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    const token = checkToken();
    if (!token) {
      navigate('/login');
    }
  }, [openAdd, changes]);

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
    setChanges((changes) => !changes);
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
    console.log('Re-render');
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
      <article className="card">
        <button onClick={() => setOpenAdd(true)} className="secondary">
          + Lägg till ny service
        </button>
        {openAdd && (
          <AddService setOpenAdd={setOpenAdd} action={toggleChanges} />
        )}
      </article>
      <article className="admin__cards-container">
        {renderCardsByCategory()}
      </article>
    </main>
  );
}
