import React from 'react'
import { Link } from "react-router-dom"
import "./style.scss"

export default function Button({link, children}) {
  //TODO: ADD LINKS EVERYWHERE
  return (
    <Link to={link} target="_blank">
    <button className='primary'>
      {children}
    </button>
    </Link>
  )
}
