import React from 'react';
import CardPrimary from '../../../../../base/cardPrimary';
import { motion } from 'framer-motion';

export default function PreviewService({
  item,
  localChanges,
  setPreview,
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
      <CardPrimary item={{ ...item, ...localChanges, img: imgUrl }} />
      <section className="grid-container">
        <button
          className="secondary"
          onClick={() => {
            setPreview(false);
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
