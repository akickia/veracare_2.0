import React from 'react';
import './style.scss';

export default function CardSecondary() {
  return (
    <article className="card card-secondary">
        <img src="../src/assets/img/treatments.jpg"></img>
        <section className='card-secondary__links'>
        <a href='#'>Reiki-healing</a>
        <a href='#'>Yoga</a>
        <a href='#'>Massage</a>
        <a href='#'>Coaching</a>
        </section>
    </article>
  );
}
