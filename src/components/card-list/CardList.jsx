import React from 'react'
import Card from "../card/Card"
const CardList = (props) => {
  return (
    <div className='flex flex-wrap p-2 max-w-screen-xl justify-center'>
        {props.monsters.map(monsters => (
        <Card key={monsters.id} monsters={monsters} />
    ))
    }</div>
  )
}

export default CardList