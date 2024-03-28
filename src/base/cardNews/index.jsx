import React from 'react';

export default function CardNews({ item }) {
  return (
    <article className="card">
      <h3>{item.title}</h3>
      <p className="card__info--text">{item.text}</p>
      <a href={item.link}>Läs mer</a>
      <img src={`${item.img}`} alt={item.alt} />
    </article>
  );
}
