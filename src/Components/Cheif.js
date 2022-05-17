import React from 'react'

export default function Cheif(props) {
  return (
    <>
      <div className='cheif  '>
        <div className='cheif--image  flex flex-col items-center jusitfy-center gap-2'>
          <p className=' name--cheif font-semibold text-lg text-gray-600 '>
            {props.name}
          </p>
          <img src={props.img} />
          <p className='font-semibold text-gray-600'>{props.description}</p>
          <h1 className='font-bold text-2xl text-lime-500 '>"{props.job}"</h1>
        </div>
      </div>
    </>
  )
}
