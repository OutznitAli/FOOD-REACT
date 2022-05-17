import React from 'react'
import { Outlet } from 'react-router-dom'
import FoodNavbar from './FoodNavbar'
import Footer from './Footer'
import HomeFood from './HomeFood'

function ClientInterface() {
  return (
    <>
      <FoodNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default ClientInterface

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import FoodNavbar from './FoodNavbar'
// import HomeFood from './HomeFood'
// import AboutFood from './AboutFood'
// import ContactFood from './ContactFood'
// import Footer from './Footer'
// import Products from './Products'
// import Pizza from './Pizza'
// import Burger from './Burger'
// import Sushi from './Sushi'
// import Noodles from './Noodles'
// import Desserts from './Desserts'
// import Drinks from './Drinks'

// function ClientInterface() {
//   return (
//     <>
//       <Router>
//         <FoodNavbar />
//         <Routes>
//           <Route path='/' exact element={<HomeFood />} />
//           <Route path='/about' element={<AboutFood />} />
//           <Route path='/contact' element={<ContactFood />} />
//           <Route path='/products' element={<Products />}>
//             <Route path='pizza' element={<Pizza />} />
//             <Route path='burger' element={<Burger />} />
//             <Route path='sushi' element={<Sushi />} />
//             <Route path='noodles' element={<Noodles />} />
//             <Route path='desserts' element={<Desserts />} />
//             <Route path='drinks' element={<Drinks />} />
//           </Route>
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default ClientInterface
