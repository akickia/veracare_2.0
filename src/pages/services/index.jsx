import React, { useEffect, useState } from 'react';
import CardPrimary from '../../base/cardPrimary';
import { motion } from 'framer-motion';
import HeadingContainer from '../../base/headingContainer';
import { getServices } from '../../core/functions/data';
import Hero from '../../base/hero';

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
        <Hero
          img={'./img/treatments.jpg'}
          links={['Reiki-healing', 'Yoga', 'Massage', 'Coaching']}
        >
          <p>
            Här finner du information om de behandlingar jag erbjuder. Jag är
            ansluten till e-passi och mina pass finns att boka på bokadirekt.se
          </p>
        </Hero>
      ) : category === 'event' ? (
        <Hero
          img={'./img/stress2.jpg'}
          className="card hero"
          links={['Event', 'Kurser', 'Workshops', 'Föreläsningar']}
        >
          <p>
            Här finner du information om kommande event, workshops och kurser
            som jag håller själv eller tillsammans med andra.
          </p>
        </Hero>
      ) : (
        <Hero img={'./img/Yoga.jpg'} links={['Yin-Yoga', 'Yoga i Härad']}>
          <p>
            Här hittar du information om mina olika Yogaklasser i Eskilstuna och
            i Härad utanför Strängnäs.
            {/* Jag samarbetar gärna och ofta med andra kunniga och härliga
            människor inom olika områden. Just nu håller jag på mycket med
            samarbeten i form av olika event och mässor. Jag har event i allt
            från grupphealing med seans eller med soundhealing till frigörande
            dans och skogsbad med yoga. Lättast hittar man dessa event på
            facebook - Veracare Consulting AB. */}
          </p>
          {/* <p>På denna sida finns exempel på samarbeten och event.</p> */}
        </Hero>
      )}
      <section className="grid">{cardsEl && cardsEl}</section>
    </motion.main>
  );
}
