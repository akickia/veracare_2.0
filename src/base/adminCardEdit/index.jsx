import React from 'react';
import AdminCardEditImg from '../adminCardEditImg';
import { motion } from 'framer-motion';

export default function AdminCardEdit({
  item,
  setOpenEdit,
  handleChange,
  handleImageChange,
  setPreview,
  imgUrl,
}) {
  return (
    <motion.article
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, x: '-50%', y: '-50%', originY: '-50%' }}
      transition={{ duration: 0.25 }}
      className="admin__card--more card"
    >
      <button className="close-btn" onClick={() => setOpenEdit(false)}>
        X
      </button>

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
          <option value={'samarbeten'}>Samarbeten</option>
          <option value={'behandlingar'}>Behandlingar</option>
          <option value={'workshop'}>Workshop</option>
        </select>
      </div>
      <section className="container">
        <div>
          <h3>Bilder: </h3>

          <AdminCardEditImg
            alt={item.alt}
            handleChange={handleChange}
            imgUrl={imgUrl}
            handleImageChange={handleImageChange}
          />

          {/* {item.img2 ? (
            <AdminCardEditImg
              img={item.img2}
              setImg={setImg}
              alt={item.alt}
              handleChange={handleChange}
            />
          ) : (
            <AdminCardEditImg
              text="Lägg till bild?"
              setImg={setImg}
              handleChange={handleChange}
            />
          )} */}
          {/* 
          {item.img3 ? (
            <AdminCardEditImg
              img={item.img3}
              setImg={setImg}
              alt={item.alt}
              handleChange={handleChange}
            />
          ) : (
            <AdminCardEditImg
              text="Lägg till bild?"
              setImg={setImg}
              handleChange={handleChange}
            />
          )} */}
        </div>
        <div>
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
      <section className="flex-container">
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
    </motion.article>
  );
}
