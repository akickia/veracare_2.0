import React from 'react';
import { motion } from 'framer-motion';

export default function ConfirmationModule({ title, setOpenConf, action }) {
  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      className="module"
    >
      <h3>Är du säker på att du vill ta bort {title}?</h3>
      <section className="grid-container">
        <button
          className="secondary"
          onClick={() => {
            setOpenConf(false);
          }}
        >
          Nej
        </button>
        <button
          className="secondary"
          onClick={() => {
            action();
          }}
        >
          Ja, ta bort
        </button>
      </section>
    </motion.article>
  );
}
