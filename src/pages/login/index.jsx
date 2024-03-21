import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../../core/functions/data.js';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = { username: name, password: pw };
    try {
      const result = await checkLogin(body);
      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', body.username);
        navigate('/admin');
      } else {
        localStorage.setItem('token', '');
        alert('Felaktiga användaruppgifter, försök igen!');
      }
    } catch (error) {
      localStorage.setItem('token', '');
      alert('Felaktiga användaruppgifter, försök igen!');
    }
  };

  //TODO: Alert?

  return (
    <main className="login">
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1, origin: '-50%' }}
        transition={{ duration: 0.25 }}
        className="card"
      >
        <h1>Välkommen, Veronica!</h1>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Ange användarnamn"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="password"
          id="pw"
          name="pw"
          placeholder="Ange lösenord"
          onChange={(e) => setPw(e.target.value)}
        ></input>
        <button className="primary" onClick={(e) => handleLogin(e)}>
          Logga in
        </button>
      </motion.form>
    </main>
  );
}
