import React, { useEffect, useState, useContext } from 'react'
import Item from '../Components/Item'
import Usefetch from './Usefetch'
import AOS from 'aos'
import CarteContext from './CarteContext'

import 'aos/dist/aos.css'

function Sushi(props) {
  const { onAdd } = props

  useEffect(() => {
    AOS.init({ duration: 1500 })
  })
  const data = Usefetch('http://localhost/ReactPHP/viewSushi.php')

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

export default Sushi
