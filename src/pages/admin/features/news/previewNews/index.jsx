import React from 'react';
import { motion } from 'framer-motion';
import CardNews from '../../../../../base/cardNews';

export default function PreviewNews({
  item,
  localChanges,
  setPreviewNews,
  action,
  imgUrl,
}) {
  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      className="card admin__card--more preview"
    >
      <CardNews item={{ ...item, ...localChanges, img: imgUrl }} />
      <section className="grid-container">
        <button
          className="secondary"
          onClick={() => {
            setPreviewNews(false);
          }}
        >
          Gå tillbaka
        </button>
        <button
          className="secondary"
          onClick={() => {
            action();
          }}
        >
          Spara ändringar
        </button>
      </section>
    </motion.article>
  );
}
