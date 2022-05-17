import React, { useEffect } from 'react'
import cover from '../image/cover.png'
import choose from '../image/choose.svg'
import delivery from '../image/delivery2.png'
import enjoy from '../image/enjoy.png'
import Cheif from './Cheif'
import cheif1 from '../image/c1.png'
import cheif2 from '../image/c2.png'
import cheif3 from '../image/c3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import dataR from './ReviewsData'
import { NavLink } from 'react-router-dom'
import ItemHome from './ItemHome'
import Usefetch from './Usefetch'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomeFood() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  })

  const allProducts = Usefetch('http://localhost/ReactPHP/viewAll.php')

  return (
    <>
      <div className='home-bg '>
        <section
          className='section--one flex grid-cols-2 '
          data-aos='fade-left'
        >
          <div className='description--header  w-1/2 flex flex-col justify-center items-center gap-5 '>
            <strong className='strong--familly'>FAMILLY TASTE</strong>
            <h1 className='header--title lg:text-6xl xl:text-7xl font-black mt-5 md:text-4xl'>
              GOOD <strong className='text-amber-500'>FOOD</strong> GOOD{' '}
              <strong className='text-lime-500'>FEELINGS</strong>
            </h1>
            <p className='text-gray-600 font-thin lg:ml-10 md:ml-10'>
              Are you hungry , working late or gaming night ? this is why we are
              here for you !
            </p>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-lime-500 underline decoration-wavy decoration-amber-500'
                  : 'text-neutral-900 '
              }
              to='/products/pizza'
            >
              <button className='btn animate-bounce bg-amber-500 text-amber-50  px-8 rounded-md hover:bg-yellow-500 duration-300 mt-5 lg:p-4 xl:p-4 md:p-3 sm:p-3'>
                CHECK OUT OUR MENU
              </button>
            </NavLink>
          </div>
          <div className='image--header  w-1/2'>
            <img src={cover} alt='pizza' width='100%' />
          </div>
        </section>
        <h2 className='h2--title text-center text-3xl mt-32 font-bold text-lime-500'>
          <span className='underline decoration-wavy decoration-amber-500 '>
            HOW IT WORKS
          </span>
        </h2>
        <section
          className='section--tow grid grid-cols-3 items-center gap-x-16 '
          data-aos='fade-up'
        >
          <div
            className='grid--cols flex flex-col justify-between items-center p-6 '
            data-aos='fade-up'
          >
            <img src={choose} alt='chosse--meal' />
            <h3 className='text-amber-500 font-bold text-lg mb-5'>
              Choose Your Meals
            </h3>
          </div>
          <div
            className='col--2 grid--cols flex flex-col justify-between items-center p-4 mt-72'
            data-aos='fade-up'
          >
            <img
              src={delivery}
              alt='delivery--cols'
              width='250px'
              className='mt-5'
            />
            <h3 className='text-amber-500 font-bold text-lg mb-5'>
              We Deliver It To You
            </h3>
          </div>
          <div
            className='grid--cols flex flex-col justify-between items-center p-4 '
            data-aos='fade-up'
          >
            <img
              src={enjoy}
              alt='delivery--cols'
              width='250px'
              className='mt-5'
            />
            <h3 className='text-amber-500 font-bold text-lg mb-5'>
              Eat And Enjoy
            </h3>
          </div>
        </section>

        <h2 className='h2--title text-center text-3xl mt-32 font-bold text-lime-500'>
          <span className='underline decoration-wavy decoration-amber-500 uppercase '>
            Our Taste Meal
          </span>
        </h2>

        <section
          className='section--three  bg-amber-500 mt-20 flex items-center justify-center'
          data-aos='fade-up'
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={4}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            className='mySwiper'
          >
            {allProducts &&
              allProducts.map((item) => {
                return (
                  <SwiperSlide>
                    <ItemHome
                      key={item.id}
                      description={item.description}
                      price={item.price}
                      nom={item.nom}
                      image={item.image}
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </section>
        <h2 className='h2--title text-center text-3xl mt-32 font-bold text-lime-500'>
          <span className='underline decoration-wavy decoration-amber-500 '>
            MEET OUR CHEIFS
          </span>
        </h2>
        <section
          className='section--four  grid grid-cols-3 items-center gap-10 mt-32'
          data-aos='fade-up'
        >
          <Cheif
            name='Michelle'
            img={cheif1}
            description='Burger, Pizza, Fries'
            job='CHEIF'
          />
          <Cheif
            img={cheif2}
            name='Amanda'
            description='Dessert, Drinks'
            job='CHEIF'
          />
          <Cheif
            img={cheif3}
            name='Kimitsu'
            description='Sushi, Nodles'
            job='CHEIF'
          />
        </section>

        <h2 className='h2--title text-center text-3xl mt-32 font-bold text-lime-500'>
          <span className='underline decoration-wavy decoration-amber-500 '>
            REVIEWS
          </span>
        </h2>
        <section
          className='section--five text-white   mt-20 flex items-center'
          data-aos='fade-up'
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            {dataR.map((item) => {
              return (
                <SwiperSlide className='flex justify-center '>
                  <div className='h-64 w-1/2 shadow-xl text-slate-500  rounded-lg cursor-grab p-3 flex  items-center'>
                    <div>
                      <div className='name--card flex items-center gap-2 mb-3'>
                        <div className='img--card w-20 rounded-xl overflow-hidden'>
                          <img src={item.img} />
                        </div>
                        <h2 className='font-bold text-gray-700'>
                          - {item.username}
                        </h2>
                      </div>
                      <div className='description '>
                        <p className='font-mono font-semibold'>{item.review}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>

        <section
          className='section--six bg-slate-900 mt-20 flex justify-around items-center '
          data-aos='fade-up'
        >
          <div className='card-visit visit--card  flex  flex-col justify-evenly items-center'>
            <h1 className='  font-bold text-3xl text-gray-900'>Visit Us</h1>
            <div className='p--card'>
              <p className='text-center  font-sans font-bold '>
                133 Av Mohammed VI Repas sur place 10
              </p>
            </div>
          </div>
          <div className='card-visit visit--card    flex  flex-col justify-evenly items-center'>
            <h1 className='  font-bold text-3xl text-gray-900'>
              Working Hours
            </h1>
            <div className='p--card'>
              <p className=' text-center  font-sans font-bold'>
                Monday - Thursday11:00 - 21:00 <br />
                Friday - Saturday11:30 - 22:00
                <br />
                Sundays12:00 - 20:00
              </p>
            </div>
          </div>
          <div className='card-visit visit--card   flex  flex-col justify-evenly items-center'>
            <h1 className='  font-bold text-3xl text-gray-900'>Contact Us</h1>
            <div className='p--card'>
              <p className='text-center  font-sans font-bold'>
                +212 95 99 00 91 <br /> example@mail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
