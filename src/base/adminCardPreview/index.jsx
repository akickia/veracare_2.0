import React, { useState } from 'react';
import CardPrimary from '../cardPrimary';
import { motion } from 'framer-motion';

export default function AdminCardPreview({
  item,
  localChanges,
  setPreview,
  action,
  imgUrl,
}) {
  return (
    <motion.article
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, x: '-50%', y: '-50%', originY: '-50%' }}
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
