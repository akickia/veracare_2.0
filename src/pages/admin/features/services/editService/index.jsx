import React from 'react';
import ImgContainer from '../../imgContainer';

export default function EditService({
  item,
  setOpenEdit,
  handleChange,
  handleImageChange,
  setPreview,
  imgUrl,
  showError,
}) {
  return (
    <article className="admin__card--more card">
      <button className="close-btn" onClick={() => setOpenEdit(false)}>
        X
      </button>
      <h1>Redigera:</h1>
      <div>
        <h3>Titel: </h3>
        <input
          type="text"
          defaultValue={item.title}
          onChange={(e) => {
            handleChange(e, 'title');
          }}
        ></input>
      </div>
      <div>
        <h3>Kategori: </h3>
        <select
          onChange={(e) => {
            handleChange(e, 'category');
          }}
          defaultValue={item.category}
        >
          <option disabled>Välj kategori</option>
          <option value={'yoga'}>Yoga</option>
          <option value={'behandlingar'}>Behandlingar</option>
          <option value={'event'}>Event</option>
        </select>
      </div>
      <section className="container">
        <div>
          <h3>Bilder: </h3>
          <ImgContainer
            alt={item.alt}
            handleChange={handleChange}
            imgUrl={imgUrl}
            handleImageChange={handleImageChange}
          />
        </div>
        <div className="text">
          <h3>Text: </h3>
          <textarea
            type="text"
            defaultValue={item.text}
            onChange={(e) => handleChange(e, 'text')}
          />
        </div>
      </section>
      <div>
        <h3>Knapptext: </h3>
        <input
          type="text"
          defaultValue={item.linkText}
          onChange={(e) => handleChange(e, 'linkText')}
        />
      </div>
      <div>
        <h3>Länk: </h3>
        <input
          type="text"
          defaultValue={item.link}
          onChange={(e) => handleChange(e, 'link')}
        />
      </div>
      <div>
        <small>Ordning: </small>
        <input
          className="order-input"
          type="number"
          required
          defaultValue={item.order}
          onChange={(e) => {
            handleChange(e, 'order');
          }}
        ></input>
      </div>
      {showError && (
        <section>
          <h2>Något gick fel, försök igen! </h2>
          <p>
            Dubbelkolla så att alla fält är ifyllda och att en bild är bifogad.
          </p>
        </section>
      )}
      <section className="grid-container">
        <button className="secondary" onClick={() => setOpenEdit(false)}>
          Avbryt
        </button>
        <button
          className="secondary"
          onClick={() => {
            setPreview(true);
          }}
        >
          Förhandsgranska
        </button>
      </section>
    </article>
  );
}
