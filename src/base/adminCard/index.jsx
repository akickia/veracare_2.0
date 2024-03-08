import React, { useState } from 'react';
import Button from '../button';

export function AdminCard({ item }) {
  const [openMore, setOpenMore] = useState(true);

  return (
    <article className="card admin__card">
      <h3>{item.title}</h3>

      <section className={openMore ? 'card__info' : 'card__info open'}>
        <img src={item.img} alt={item.alt} />
        <p className="card__info--text">{item.text}</p>
        {item.img2 && (
          <section className="flex-container">
            {item.img2 && <img src={item.img2} alt={item.alt} />}
            {item.img3 && <img src={item.img3} alt={item.alt} />}
          </section>
        )}
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
        <Button
          link={item.link}
          download={item.link.includes('.pdf') ? true : false}
        >
          {item.linkText}
        </Button>
      </section>
    </article>
  );
}
