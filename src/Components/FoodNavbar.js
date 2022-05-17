import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../image/LOGO.png'

export default function FoodNavbar() {
  return (
    <>
      <div className='header--fastFood'>
        <div className='header--row1 bg-neutral-900 flex justify-between h-10 text-slate-200 '>
          <div className='detail flex gap-x-6'>
            <div className='location flex items-center gap-x-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='#D4D4D8'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <span>133 Av Mohammed VI Repas sur place</span>
            </div>
            <div className='phone flex items-center gap-x-1'>
              <div className='mt-0.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#D4D4D8'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <span>06 96 99 00 51</span>
            </div>
          </div>

          <div className='social--media flex flex-row space-x-5 items-center'>
            <NavLink className='admin-side' to='/admin'>
              Admin side
            </NavLink>
            <a href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                className='w-5'
                fill='#D4D4D8'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
              </svg>
            </a>
            <a href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-5'
                fill='#D4D4D8'
              >
                <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
              </svg>
            </a>
            <a href='#' className='pr-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-5'
                fill='#D4D4D8'
              >
                <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='header--row2  p-5 flex justify-center shadow-sm '>
          <NavLink to='/'>
            <img src={logo} alt='logo' className='logo mr-64' />
          </NavLink>

          <ul className='header--row2--nav flex justify-center gap-10 text-lg mr-auto'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lime-500 underline decoration-wavy decoration-amber-500'
                    : 'text-neutral-900 '
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lime-500 underline decoration-wavy decoration-amber-500'
                    : 'text-neutral-900 '
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-lime-500 underline decoration-wavy decoration-amber-500'
                    : 'text-neutral-900 '
                }
                to='/contact'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
