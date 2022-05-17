import React from 'react'
import axios from 'axios'
import Usefetch from './Usefetch'
import user from '../image/user.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import MoneyIcon from '@mui/icons-material/Money'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import swal from 'sweetalert'

function OrdersPage() {
  const data = Usefetch('http://localhost/ReactPHP/ViewCommande.php')

  return (
    <>
      <div className='grid-card-facture p-10'>
        {data !== undefined &&
          data.map((item) => (
            <div className='flex card-facture   rounded-lg'>
              <div className='bg-stone-800 item1  flex flex-col gap-4 items-center justify-center'>
                <div className='flex flex-col justify-center items-center'>
                  <img src={user} width='100px' />
                  <h1 className='font-bold text-stone-50'>{item.nom_client}</h1>
                </div>
                <div className='bg-stone-50 hover:text-amber-600 hover:duration-500 rounded-lg text-amber-500'>
                  <button
                    onClick={() => {
                      const status = {
                        status_commande: 'Delivred',
                        id_commande: item.id_commande,
                      }

                      axios
                        .post('http://localhost/ReactPHP/Status.php', status)
                        .then((response) => {
                          swal('Item delivred', '', 'success')
                        })
                    }}
                    className='p-2 '
                  >
                    Complete
                  </button>
                </div>
              </div>
              <div className=' p-4'>
                <p className='font-bold text-sm uppercase text-stone-700 flex'>
                  <LocationOnIcon className='text-lime-600' />{' '}
                  <div>{item.adresse_client}</div>
                </p>

                <p className='text-stone-700'>
                  <Grid3x3Icon className='text-lime-600' /> {item.id_commande}
                </p>
                <p className='text-stone-700'>
                  <CalendarTodayIcon className=' text-lime-600' />{' '}
                  {item.date_commande}
                </p>

                <p className='text-stone-700'>
                  <LocalPhoneIcon className='text-lime-600' />{' '}
                  {item.phone_client}
                </p>
                <p className='text-stone-700'>
                  <MoneyIcon className='text-lime-600' /> {item.prix_commande}{' '}
                  MAD
                </p>
                <p className='text-stone-700'>
                  <CreditCardIcon className='text-lime-600' />{' '}
                  {item.type_paiment}
                </p>
                <p className='text-stone-700'>
                  <SentimentDissatisfiedIcon className='text-lime-600' />{' '}
                  {item.status_commande}
                </p>
              </div>
            </div>
          ))}
      </div>
      {/* <div className='flex card-facture bg-red-600 m-3 rounded-lg'>
        <div className='bg-lime-200 flex flex-col gap-4 items-center justify-center'>
          <div className='bg-red-600 flex flex-col justify-center items-center'>
            <img src={user} width='100px' />
            <h1>Ali outzniasasast</h1>
          </div>
          <div className='bg-stone-400'>
            <button>Complete</button>
          </div>
        </div>
        <div className='bg-lime-600 p-4'>
          <p>
            <LocationOnIcon />
          </p>
          <p>
            <CalendarTodayIcon />
          </p>
          <p>
            <Grid3x3Icon />
          </p>
          <p>
            <LocalPhoneIcon />
          </p>
          <p>
            <MoneyIcon />
          </p>
          <p>
            <SentimentDissatisfiedIcon />
          </p>
          <p>
            <CreditCardIcon />
          </p>
        </div>
      </div> */}
    </>
  )
}

export default OrdersPage
