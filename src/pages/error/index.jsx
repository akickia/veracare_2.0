import React from 'react';
import './style.scss';

export default function ErrorPage() {
  return (
    <main className="error">
      <section className="card">
        <h1>Oups! </h1>
      </section>
      <section className="card">
        <p>Något gick på tok, försök igen.</p>
        <img src="https://veracare-bucket.s3.eu-north-1.amazonaws.com/Massage.jpg" />
      </section>
    </main>
  );
}
