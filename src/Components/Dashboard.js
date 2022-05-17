import React from 'react'
import Usefetch from './Usefetch'
import cash from '../image/cashda.png'
import delivred from '../image/delivred.png'
import pending from '../image/pending.png'

function Dashboard() {
  const orderCount = Usefetch('http://localhost/ReactPHP/viewCommande.php')
  const deliveredOrderCount = Usefetch(
    'http://localhost/ReactPHP/ViewDelivredCommande.php'
  )

  let list = deliveredOrderCount

  return (
    <>
      <div className='wrapercoun flex justify-around items-center h-full'>
        <div className='order-count item1'>
          <h1 className='text-lg font-bold uppercase p-2 text-neutral-100 '>
            pending order
          </h1>

          <div className=' flex justify-evenly detail-img items-center'>
            {orderCount && (
              <p className='font-extrabold text-6xl text-stone-50 align'>
                {orderCount.length}
              </p>
            )}

            <div className='image-dash'>
              <img src={pending} width='300px' />
            </div>
          </div>
        </div>

        <div className='order-count item2'>
          <h1 className='text-lg uppercase font-bold p-2 text-neutral-100'>
            Delivrerd order
          </h1>

          <div className=' flex justify-evenly detail-img items-center'>
            {deliveredOrderCount && (
              <p className='font-extrabold text-6xl text-stone-50 align'>
                {deliveredOrderCount.length}
              </p>
            )}

            <div className='image-dash'>
              <img src={delivred} width='300px' />
            </div>
          </div>
        </div>

        <div className='order-count item3'>
          <h1 className='text-lg uppercase font-bold p-2 text-neutral-100'>
            Total earnings
          </h1>
          <div className=' flex justify-evenly detail-img items-center'>
            {list && (
              <p className='font-extrabold text-6xl text-stone-50 align'>
                {list
                  .reduce((s, x) => s + parseFloat(x.prix_commande), 0)
                  .toFixed(2)}
              </p>
            )}

            <div className='image-dash'>
              <img src={cash} width='300px' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
