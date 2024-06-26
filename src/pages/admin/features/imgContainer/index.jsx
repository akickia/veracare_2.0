import React from 'react';

export default function ImgContainer({
  text = 'Byta bild?',
  alt,
  handleChange,
  handleImageChange,
  imgUrl,
}) {
  return (
    <>
      <section className="container__card">
        <img src={imgUrl} />
        <section>
          <section className="container__card--change">
            <small>{text}</small>
            <input
              type="file"
              name="img"
              onChange={(event) => handleImageChange(event)}
            />
          </section>
          <section className="container__card--alt">
            <small>Bildbeskrivning:</small>
            <input
              type="text"
              defaultValue={alt}
              onChange={(e) => handleChange(e, 'alt')}
            ></input>
          </section>
        </section>
      </section>
    </>
  );
}
