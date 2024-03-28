import React, { useEffect, useState } from 'react';
import { checkToken, getNews, getServices } from '../../core/functions/data';
import { AdminCard } from './features/services/adminCard';
import HeadingContainer from '../../base/headingContainer';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import AddService from './features/services/addService';
import AddNews from './features/news/addNews';
import CardNews from '../../base/cardNews';
import { AdminNewsCard } from './features/news/adminNewsCard';

export default function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [changes, setChanges] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddNews, setOpenAddNews] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    const token = checkToken();
    if (!token) {
      navigate('/login');
    }
  }, [openAdd, changes, openAddNews]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await getServices();
        setData(jsonData.services);
      } catch (error) {
        console.error('Error in fetchData: ', error);
      }
    };
    const fetchNews = async () => {
      try {
        const jsonData = await getNews();
        setNews(jsonData.news);
      } catch (error) {
        console.error('Error in fetching News: ', error);
      }
    };
    fetchData();
    fetchNews();
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

  const newsEl = () => {
    return (
      <div className="category-container card">
        <h2>Nyheter</h2>
        <div className="cards-container">
          {news &&
            news.map((item) => (
              <AdminNewsCard item={item} key={item.id} action={toggleChanges} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <main>
      <HeadingContainer heading={'Admin'} />
      <article className="card">
        <section className="grid-container">
          <button onClick={() => setOpenAddNews(true)} className="secondary">
            + Lägg till nyhet
          </button>
          <button onClick={() => setOpenAdd(true)} className="secondary">
            + Lägg till ny tjänst
          </button>
        </section>
        {openAdd && (
          <AddService setOpenAdd={setOpenAdd} action={toggleChanges} />
        )}
        {openAddNews && (
          <AddNews setOpenAddNews={setOpenAddNews} action={toggleChanges} />
        )}
      </article>
      <article className="admin__cards-container">{newsEl()}</article>
      <article className="admin__cards-container">
        {renderCardsByCategory()}
      </article>
    </main>
  );
}
