import React, { useState, useContext } from 'react'
import CarteContext from './CarteContext'

const Item = (props) => {
  const { product, onAdd } = props

  return (
    <>
      <div className='card-item hover:border-dashed hover:border-2 hover:border-lime-500 duration-100'>
        <img src={product.image} />

        <h1 className='font-extrabold  text-xl text-stone-800 '>
          <a className='hover:text-stone-500 duration-300 ' href='#'>
            {product.nom}
          </a>
        </h1>
        <p className='text-sm font-sans text-stone-500'>
          {product.description}
        </p>
        <span className='font-extrabold text-xl text-stone-800 mb-2.5'>
          {product.price} MAD
        </span>
        <button
          onClick={() => onAdd(product)}
          className='btn-cart  bg-amber-500 text-amber-50   rounded-md hover:bg-yellow-500 duration-300  p-3'
        >
          add to cart
        </button>
      </div>
    </>
  )
}

export default Item
