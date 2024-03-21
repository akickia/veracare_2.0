import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Button({ link, children, download = false }) {
  return (
    <Link to={link} target="_blank" download={download}>
      <button className="primary">{children}</button>
    </Link>
  );
}
