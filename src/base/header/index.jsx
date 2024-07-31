import React, { useEffect, useState } from 'react';
import { AnimatePresence, easeIn, motion } from 'framer-motion';
import './style.scss';
import NavComponent from '../nav';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <article className="header">
        {!isMobile ? (
          <nav className="header__navigation--desktop">
            <NavComponent />
          </nav>
        ) : (
          <nav className="header__navigation--mobile">
            <button className="openbtn" onClick={() => setIsOpen(!isOpen)}>
              &#9776; Menu
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ duration: 0.5, timingFunction: easeIn }}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <button className="closebtn" onClick={() => setIsOpen(false)}>
                    &times;
                  </button>
                  <NavComponent />
                </motion.div>
              )}{' '}
            </AnimatePresence>
          </nav>
        )}
        <img src="./img/logo-new--small.png" />
      </article>
    </header>
  );
}
