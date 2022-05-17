import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link, NavLink, Outlet } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import LogoutIcon from '@mui/icons-material/Logout'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import CarteContext from './CarteContext'
import DoneAllIcon from '@mui/icons-material/DoneAll'

function NavAdmin() {
  const { disable, setDisable } = useContext(CarteContext)

  let navigate = useNavigate()
  const [auth, setAuth] = useState()

  useEffect(() => {
    let sendAuth = localStorage.getItem('admin_name')
    setAuth(sendAuth)
  }, [])

  if (auth === null) {
    navigate('/admin')
  }

  const logOut = () => {
    localStorage.removeItem('admin_name')
    localStorage.removeItem('admin_password')

    localStorage.clear()
    navigate('/home')
  }
  return (
    <>
      <nav className='flex justify-center'>
        <ul className='flex   nav-side h-20 items-center justify-center gap-20'>
          <li className='text-stone-700 itemBtn'>
            <NavLink to='/admin/dashboard'>
              <div className=' flex items-center gap-1'>
                <DashboardIcon />
                Dashboard
              </div>
            </NavLink>
          </li>

          <li className=' itemBtn'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-lime-500 ' : ' text-stone-400 '
              }
              to='orders'
            >
              <div className=' flex items-center gap-1'>
                <ListAltIcon />
                Orders
              </div>
            </NavLink>
          </li>
          <li className=' itemBtn'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-lime-500 ' : ' text-stone-400 '
              }
              to='delivred-orders'
            >
              <div className=' flex items-center gap-1'>
                <DoneAllIcon />
                Delivred orders
              </div>
            </NavLink>
          </li>

          <li className='itemBtn'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-lime-500' : ' text-stone-400 '
              }
              to='add-products'
            >
              <div className=' flex items-center gap-1'>
                <AddShoppingCartIcon />
                Add Products
              </div>
            </NavLink>
          </li>
          <li className='itemBtn'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-lime-500' : ' text-stone-400 '
              }
              to='view-products'
            >
              <div className=' flex items-center gap-1'>
                <FastfoodIcon />
                View Products
              </div>
            </NavLink>
          </li>

          <li className='text-red-600'>
            <NavLink onClick={logOut} to='/'>
              <div className=' flex items-center gap-1'>
                <LogoutIcon />
                Log Out
              </div>
            </NavLink>
          </li>
          <li className={disable}>
            <NavLink to='edit-products'>
              <div className=' flex items-center gap-1'>
                <FastfoodIcon />
                Edit Products
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavAdmin
