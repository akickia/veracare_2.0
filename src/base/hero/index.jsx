import React from 'react';
import './style.scss';

export default function Hero({ img, links, children }) {
  return (
    <article className="card hero">
      <img src={img} />
      <section className="hero__info">
        <section className="hero__links">
          {links && links.map((link, i) => <h4 key={i}>{link}</h4>)}
        </section>
        {children}
      </section>
    </article>
  );
}
