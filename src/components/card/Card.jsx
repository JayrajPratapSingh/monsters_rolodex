import React from 'react'

const Card = (props) => {
  return (
    <div className='max-w-xs bg-yellow-200 rounded-lg mx-2 my-2 px-3 py-2 align-middle hover:scale-110 shadow-xl duration-500' >
        <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
        <div className='text-2xl font-bold w-48 felx content my-3 text-red-700'>
            {props.monsters.name}
        </div>
        <h5>{props.monsters.email}</h5>
    </div>
  )
}

export default Card