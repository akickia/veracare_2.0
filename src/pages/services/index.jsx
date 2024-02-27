import React, { useEffect, useState } from 'react'
import jsonData from "../../assets/data/info.json"
import { CardPrimary } from '../../base/cardPrimary'

export default function Services() {
  const [data, setData] = useState()

  useEffect(() => {
    setData(jsonData)
  }, [])
  
  const cardsEl = data && data.map((item, i) => {
    if (item.category === "treatments"){
    return <CardPrimary item={item} key={i}></CardPrimary>
  }
  })

  return (
    <article>
      <section className="card starter__text">
        <h1>Behandlingar</h1>
      </section>
      
        {cardsEl && cardsEl}
    </article>
  )
}
