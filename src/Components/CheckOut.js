import React, { useContext, useState, useRef } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import empty from '../image/ecart.png'
import CarteContext from './CarteContext'

function CheckOut(props) {
  let history = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + shippingPrice

  console.log('this is', cartItems)
  const d = new Date()
  let dateOrder = d.toLocaleDateString()

  const [userInformation, setUserInformation] = useState({
    nom_client: '',
    adresse_client: '',
    phoneNum_client: '',
    prix_commande: totalPrice,
    date_commande: dateOrder,
    type_paiment: '',
    status_commande: 'preparing',
  })

  const handlChangeInformation = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value })
  }

  const onClick = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value })

    if (e.target.checked === true && e.target.value === 'cash on delivery') {
      let background = (document.getElementsByClassName(
        'credit-card-form'
      )[0].style.backgroundColor = '#F3F3F3')

      let input1 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[0].children[0].disabled = true)

      let input2 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[0].children[1].disabled = true)

      let input3 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[1].children[0].disabled = true)

      let input4 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[1].children[1].disabled = true)
      console.log('true')
    } else {
      let backgrounDeafult = (document.getElementsByClassName(
        'credit-card-form'
      )[0].style.backgroundColor = 'transparent')
      let input1 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[0].children[0].disabled = false)

      let input2 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[0].children[1].disabled = false)

      let input3 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[1].children[0].disabled = false)

      let input4 = (document.getElementsByClassName(
        'credit-card-form'
      )[0].children[1].children[1].disabled = false)

      console.log('false')
    }
  }

  const handlSubmit = (e) => {
    e.preventDefault()

    const userInfo = {
      nom_client: userInformation.nom_client,
      adresse_client: userInformation.adresse_client,
      phoneNum_client: userInformation.phoneNum_client,
      prix_commande: userInformation.prix_commande,
      date_commande: userInformation.date_commande,
      type_paiment: userInformation.type_paiment,
      status_commande: 'preparing',
    }

    if (
      userInformation.nom_client != '' &&
      userInformation.phoneNum_client != '' &&
      userInformation.adresse_client != ''
    ) {
      axios
        .post('http://localhost/ReactPHP/InsertOrder.php', userInfo)
        .then((response) => {
          swal('Order sent', 'we will deliver your order soon !', 'success')

          history('/products/pizza')
          console.log(response)
        })

      setUserInformation({
        nom_client: '',
        adresse_client: '',
        phoneNum_client: '',
        prix_commande: totalPrice,
        date_commande: dateOrder,
        type_paiment: '',
        status_commande: 'preparing',
      })
    } else {
      swal('Information is empty', '', 'warning')
    }
  }
  console.log(userInformation)
  return (
    <>
      <div className='container-cart-payment '>
        <div className='bg-lime-500 container-cart'>
          <h1 className='text-lg font-extrabold text-lime-500 uppercase '>
            Cart Items
          </h1>
          {cartItems.length === 0 && (
            <div className=' flex items-center justify-center h-full'>
              <img src={empty} width='250px' />
            </div>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className='container-order flex justify-around gap-1'
            >
              <div className='image-order '>
                <img src={item.image} />
              </div>
              <div className='detail flex flex-col gap-2 '>
                <div className='decription'>
                  <h1 className=' font-bold text-sm text-amber-500'>
                    {item.nom}
                  </h1>
                  <p className='text-xs text-stone-500	'>{item.description}</p>
                </div>

                <div className='counter flex justify-between '>
                  <span className='font-extrabold text-sm text-lime-500'>
                    {item.price} MAD
                  </span>
                  <div>
                    <div className=' flex gap-3  text-stone-600 font-bold'>
                      <button onClick={() => onRemove(item)}>-</button>
                      <span> {item.qty}</span>
                      <button onClick={() => onAdd(item)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className='form-z' onSubmit={handlSubmit}>
          <div className='bg-red-600 container-payment p-10'>
            <h1 className='text-lg font-extrabold text-lime-500 uppercase'>
              Payment details
            </h1>

            <div className=''>
              <div className='container-f-p '>
                <div className='input-payment fullname text-stone-900'>
                  <input
                    {...register('nom_client', {
                      required: 'name required',
                    })}
                    type='text'
                    placeholder='full name'
                    name='nom_client'
                    onChange={handlChangeInformation}
                    value={userInformation.nom_client}
                  />
                  {errors.nom_client && (
                    <small className='p-4'>{errors.nom_client.message}</small>
                  )}
                </div>

                <div className='input-payment'>
                  <input
                    {...register('phoneNum_client', {
                      required: 'phone number required',
                    })}
                    type='number'
                    placeholder='phone number'
                    name='phoneNum_client'
                    onChange={handlChangeInformation}
                    value={userInformation.phoneNum_client}
                  />
                  {errors.phoneNum_client && (
                    <small className='p-4'>
                      {errors.phoneNum_client.message}
                    </small>
                  )}
                </div>

                <div className='input-payment adresse-span'>
                  <input
                    {...register('adresse_client', {
                      required: 'adresse required',
                    })}
                    type='text'
                    placeholder='Your Adresse'
                    name='adresse_client'
                    onChange={handlChangeInformation}
                    value={userInformation.adresse_client}
                  />
                  {errors.adresse_client && (
                    <small className='p-4'>
                      {errors.adresse_client.message}
                    </small>
                  )}
                </div>
              </div>

              <div className='input-payment-radio '>
                <div className='flex gap-2 items-center p-2'>
                  <input
                    type='radio'
                    id='credit-card'
                    name='type_paiment'
                    value='credit card'
                    onClick={onClick}
                  />

                  <label for='credit-card'>Credit-Card</label>
                </div>

                <div className='credit-card-form rounded-xl '>
                  <div className='input-payment'>
                    <input
                      type='number'
                      placeholder='Card Number'
                      name='cardNumber'
                    />

                    <input type='number' placeholder='Expiration Year' />
                  </div>

                  <div className='input-payment'>
                    <input type='text' placeholder='Full Name' />
                    <input type='number' placeholder='MVC' />
                  </div>
                </div>

                <div className='flex gap-2 items-center p-2'>
                  <input
                    type='radio'
                    id='cash'
                    name='type_paiment'
                    value='cash on delivery'
                    onClick={onClick}
                  />
                  <label for='cash'>Cash on delivery</label>
                </div>
              </div>
              <div className='flex flex-col justify-end items-end'>
                <div className='flex grid-price-charge'>
                  <p className='text-sm'>delivery charge:</p>
                  <span className='text-sm'> {shippingPrice} MAD</span>
                </div>

                <div className='flex grid-price-charge'>
                  <p className='text-sm'>Total:</p>
                  <span className='text-lg font-extrabold text-lime-700'>
                    {' '}
                    {totalPrice.toFixed(2)} MAD
                  </span>
                </div>
              </div>

              <div className='submitbtnOrder flex justify-end '>
                {cartItems.length === 0 ? (
                  <button
                    type='submit'
                    className='p-3 bg-lime-500 rounded-xl mt-10 text-stone-50 btn-disa'
                  >
                    check out
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='p-3 bg-lime-500 rounded-xl mt-10 text-stone-50'
                  >
                    check out
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckOut
