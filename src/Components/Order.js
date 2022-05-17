import React from 'react'
import CarteContext from './CarteContext'
import { useContext, useState } from 'react'

function Order(props) {
  const { onAdd } = props
  return (
    <>
      <div
        onClick={props.click}
        className='container-order  flex justify-around gap-1'
      >
        <div className='image-order '>
          <img src={props.image} />
        </div>

        <div className='detail flex flex-col gap-2 '>
          <div className='decription'>
            <h1 className=' font-bold text-sm text-amber-500'>{props.nom}</h1>
            <p className='text-xs text-stone-500	'>{props.description}</p>
          </div>

          <div className='counter flex justify-between '>
            <span className='font-extrabold text-sm text-lime-500'>
              {props.price} MAD
            </span>
            <div>
              <div className=' flex gap-3  text-stone-600 font-bold'>
                <button>-</button>
                <span onChange={props.handlChange}></span>
                <button onClick={() => onAdd(props)}>+</button>
              </div>
            </div>
            {props.qty}
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
