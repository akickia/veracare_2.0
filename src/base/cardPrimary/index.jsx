import React, { useEffect, useState } from 'react';

import './style.scss';
import Button from '../button';

export function CardPrimary({ item }) {

  const img = '../src/assets/img/' + item.img;

  const [openMore, setOpenMore] = useState(true);

  useEffect(() => {
    if (openMore) {
    }
  }, [openMore]);

  return (
    <article className="card">
      <h3>{item.title}</h3>

      <section className={openMore ? 'card__info' : 'card__info open'}>
      <img src={img} alt={item.alt} />
        <p className='card__info--text'>{item.text}</p>
        
      </section>
      <p
        className="card__more"
        onClick={() => {
          setOpenMore(!openMore);
        }}
      >
        {openMore ? 'Läs mer' : 'Läs mindre'}
      </p>

      <section className="card__book-btn">
        <Button onClick={() => console.log(item.link)}>Boka tid</Button>
      </section>
    </article>
  );
}
