import React from 'react';

export default function AdminCardEditImg({
  img,
  text = 'Byta bild?',
  setImg,
  alt,
  handleChange,
}) {
  return (
    <>
      <section className="img__card">
        {img && <button className="close-btn">x</button>}
        {/* <img src={img} /> */}
        <section>
          <section className="img__card--change">
            <small>{text}</small>
            <input
              type="file"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </section>
          <section className="img__card--alt">
            <small>Bildbeskrivning:</small>
            <input
              type="text"
              defaultValue={alt || 'none'}
              onChange={(e) => handleChange(e, 'alt')}
            ></input>
          </section>
        </section>
      </section>
    </>
  );
}
