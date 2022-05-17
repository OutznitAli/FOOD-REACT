import React, { useEffect, useState, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Pizza from './Pizza'
import CarteContext, { CartProvider } from './CarteContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

function Products(props) {
  const { item, newArray } = useContext(CarteContext)

  return (
    <>
      <nav className='sticky bg-lime-500 top-0'>
        <ul className='flex justify-center gap-14 p-4  text-lime-50 text-lg font-bold '>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50  '
              }
              id='products-hover-link'
              to='pizza'
            >
              Pizza
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50 '
              }
              to='burger'
            >
              Burger
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50  '
              }
              to='sushi'
            >
              Sushi
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50  '
              }
              to='noodles'
            >
              Noodles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50  '
              }
              to='desserts'
            >
              Desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-stone-50   underline decoration-wavy decoration-stone-50'
                  : 'text-stone-50 '
              }
              to='drinks'
            >
              Drinks
            </NavLink>
          </li>

          <li>
            <NavLink to='checkout'>
              <div className='icon-cart'>
                <ShoppingBagIcon />
                <span className=' text-xl font-extrabold'>
                  {props.countCartItems}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Products
