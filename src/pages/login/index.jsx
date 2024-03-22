import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { checkLogin, checkToken } from '../../core/functions/data.js';
import { motion } from 'framer-motion';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [showErr, setShowErr] = useState(false);

  useEffect(() => {
    const token = checkToken();
    if (token) {
      navigate('/admin');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = { username: name, password: pw };
    try {
      const result = await checkLogin(body);
      if (result.success) {
        setShowErr(false);
        localStorage.setItem('token', result.token);
        const key = jwtDecode(result.token);
        localStorage.setItem('key', key.code);
        navigate('/admin');
      } else {
        localStorage.setItem('token', '');
        setShowErr(true);
      }
    } catch (error) {
      localStorage.setItem('token', '');
      setShowErr(true);
    }
  };

  return (
    <main className="login">
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1, origin: '-50%' }}
        transition={{ duration: 0.5 }}
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
        <button className="secondary" onClick={(e) => handleLogin(e)}>
          Logga in
        </button>
        {showErr && (
          <section className="wrong-input">
            <h3>Felaktiga användaruppgifter, försök igen</h3>
          </section>
        )}
      </motion.form>
    </main>
  );
}
