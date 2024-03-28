import React from 'react';
import ImgContainer from '../../imgContainer';

export default function EditService({
  item,
  setOpenNewsEdit,
  handleChange,
  handleImageChange,
  setPreviewNews,
  imgUrl,
  showError,
}) {
  return (
    <article className="admin__card--more card">
      <button className="close-btn" onClick={() => setOpenNewsEdit(false)}>
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
        <h3>Länk: </h3>
        <input
          type="text"
          defaultValue={item.link}
          onChange={(e) => handleChange(e, 'link')}
        />
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
        <button className="secondary" onClick={() => setOpenNewsEdit(false)}>
          Avbryt
        </button>
        <button
          className="secondary"
          onClick={() => {
            setPreviewNews(true);
          }}
        >
          Förhandsgranska
        </button>
      </section>
    </article>
  );
}
