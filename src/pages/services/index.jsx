import React, { useEffect, useState } from 'react'
import jsonData from "../../assets/data/info.json"
import { CardPrimary } from '../../base/cardPrimary'
import CardContainer from '../../base/cardContainer'
import CardSecondary from '../../base/cardSecondary';
import "./style.scss"

export default function Services() {
  const [data, setData] = useState();
  const [filterCategory, setFilterCategory] = useState("behandlingar");

  useEffect(() => {
    setData(jsonData)
  }, [])

  
  
  const cardsEl = data && data.map((item, i) => {
    if (item.category === filterCategory){
    return <CardPrimary item={item} key={i}></CardPrimary>
  }
  })

  return (
    <article className='services'>
      <CardContainer category={filterCategory} items={data}>
        <CardSecondary className='card'>
          <h2>Text</h2>
        </CardSecondary>
        <section className='grid'>
        {cardsEl && cardsEl}
        </section>
      </CardContainer>
    </article>
  )
}
