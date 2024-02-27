import React from 'react';

export default function CardContainer({ category, children }) {
  return (
    <section>
      <section className="card">
        <h1>{category}</h1>
      </section>
      {children}
    </section>
  );
}
