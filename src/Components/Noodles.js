import React, { useEffect, useState } from 'react'
import Usefetch from './Usefetch'
import Item from './Item'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Noodles(props) {
  const { onAdd } = props

  useEffect(() => {
    AOS.init({ duration: 1500 })
  })
  const data = Usefetch('http://localhost/ReactPHP/viewNoodles.php')

  return (
    <>
      <div className='grid grid-cols-4 ' data-aos='fade-up'>
        {data &&
          data.map((product) => {
            return <Item key={product.id} product={product} onAdd={onAdd} />
          })}
      </div>
    </>
  )
}

export default Noodles
