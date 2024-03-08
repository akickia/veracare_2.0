import React, { useEffect, useState } from 'react';
import CardPrimary from '../../base/cardPrimary';
import { motion } from 'framer-motion';
import Button from '../../base/button';
import HeadingContainer from '../../base/headingContainer';
import { getServices } from './data';

export default function Services({ category }) {
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
    sortDataByOrder(data.filter((item) => item.category === category)).map(
      (item, i) => {
        return <CardPrimary item={item} key={i}></CardPrimary>;
      }
    );

  return (
    <motion.main
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <HeadingContainer heading={category} />
      {category === 'behandlingar' ? (
        <article className="card hero">
          <img src="../src/assets/img/treatments.jpg" />
          <section className="hero__links">
            <a href="#">Reiki-healing</a>
            <a href="#">Yoga</a>
            <a href="#">Massage</a>
            <a href="#">Coaching</a>
          </section>
        </article>
      ) : category === 'workshop' ? (
        <article className="card hero">
          <img src="../src/assets/img/stress2.jpg" />
          <section className="hero__links">
            <a href="#">Workshop</a>
            <a href="#">Kurser</a>
          </section>
        </article>
      ) : (
        <article className="card">
          <h3>Event och mässor</h3>
          <p>
            Jag samarbetar gärna och ofta med andra kunniga och härliga
            människor inom olika områden. Just nu håller jag på mycket med
            samarbeten i form av olika event och mässor. Jag har event i allt
            från grupphealing med seans eller med soundhealing till frigörande
            dans och skogsbad med yoga. Lättast hittar man dessa event på
            facebook - Veracare Consulting AB.
          </p>
          <p>Här finns exempel på samarbeten och event.</p>
          <section className="card__book-btn">
            <Button onClick={() => console.log('hej')}>
              VeraCare på FaceBook
            </Button>
          </section>
        </article>
      )}
      <section className="grid">{cardsEl && cardsEl}</section>
    </motion.main>
  );
}
