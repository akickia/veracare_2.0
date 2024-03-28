import React from 'react';
import { Link } from 'react-router-dom';

export default function NavComponent() {
  return (
    <>
      <Link to="./">Start</Link>
      <Link to="./behandlingar">Behandlingar</Link>
      <Link to="./yoga">Yoga</Link>
      <Link to="./event">Event</Link>
      <Link to="./om">Om mig</Link>
    </>
  );
}
