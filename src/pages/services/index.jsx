import React, { useEffect, useState } from 'react';
import jsonData from '../../assets/data/info.json';
import CardPrimary from '../../base/cardPrimary';
import CardContainer from '../../base/cardContainer';
import './style.scss';
import Button from '../../base/button';

export default function Services({ category }) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const cardsEl =
    data &&
    data.map((item, i) => {
      if (item.category === category) {
        return <CardPrimary item={item} key={i}></CardPrimary>;
      }
    });

  return (
    <main className="services">
      <CardContainer category={category}>
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
                  Jag samarbetar gärna och ofta med andra kunniga och härliga människor inom olika områden. Just nu håller jag på mycket med samarbeten i form av olika event och mässor. Jag har event i allt från grupphealing med seans eller med soundhealing till
                  frigörande dans och skogsbad med yoga. Lättast hittar man dessa event på facebook - Veracare Consulting AB.
                </p>
                <p>Här finns exempel på samarbeten och event.</p>
                <section className='card__book-btn'><Button onClick={() => console.log("hej")}>
                  VeraCare på FaceBook
                </Button>
                </section>
              
            </article>
          )}
        <section className="grid">{cardsEl && cardsEl}</section>
      </CardContainer>
    </main>
  );
}
