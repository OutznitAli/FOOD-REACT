import React from 'react'
import br from '../image/br.jpg'
function ItemHome(props) {
  return (
    <>
      <div className='itehome  rounded-lg	 flex flex-col items-center	gap-2'>
        <img src={props.image} />

        <h1 className='font-extrabold  text-xl text-lime-400 '>
          <a className='hover:text-stone-500 duration-300 ' href='#'>
            {props.nom}
          </a>
        </h1>
        <p className='text-sm font-sans text-stone-500 text-center'>
          {props.description}
        </p>
        <span className='font-extrabold text-xl text-amber-500 mb-2.5 '>
          ${props.price}
        </span>
      </div>
    </>
  )
}

export default ItemHome
