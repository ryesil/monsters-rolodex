import React from 'react'
import CardComponent from '../card/CardComponent'
import './CardList.css'

function CardList({monsters}) {
  return (
    <div className={"card-list"}>
        {monsters.map((monster)=><CardComponent key={monster.id} monster={monster}/>)}
    </div>
  )
}

export default CardList