import React from 'react'
import "./style.scss"

export default function Button({onClick, children}) {
  return (
    <button className='primary' onClick={onClick}>
      {children}
    </button>
  )
}
