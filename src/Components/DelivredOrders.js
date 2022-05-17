import React from 'react'
import axios from 'axios'
import Usefetch from './Usefetch'
import user from '../image/user.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import MoneyIcon from '@mui/icons-material/Money'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MoodIcon from '@mui/icons-material/Mood'

function DelivredOrders() {
  const datas = Usefetch('http://localhost/ReactPHP/ViewDelivredCommande.php')
  return (
    <>
      {
        <div className='grid-card-facture  p-10'>
          {datas &&
            datas.map((item) => (
              <div className='flex card-facture   rounded-lg'>
                <div className='bg-stone-800  item3 flex flex-col gap-4 items-center justify-center'>
                  <div className='flex flex-col   justify-center items-center'>
                    <img src={user} width='100px' />
                    <h1 className='font-bold text-stone-50'>
                      {item.nom_client}
                    </h1>
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
                    <MoodIcon className='text-lime-600' />{' '}
                    {item.status_commande}
                  </p>
                </div>
              </div>
            ))}
        </div>
      }
    </>
  )
}

export default DelivredOrders
