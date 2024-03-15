import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Button({
  link,
  children,
  download = false,
  target = '_blank',
}) {
  return (
    <Link to={link} target={target} download={download}>
      <button className="primary">{children}</button>
    </Link>
  );
}
