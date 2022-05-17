import './App.css'
import React, { useState } from 'react'
import ClientInterface from './Components/ClientInterface'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeFood from './Components/HomeFood'
import AboutFood from './Components/AboutFood'
import ContactFood from './Components/ContactFood'
import Products from './Components/Products'
import Pizza from './Components/Pizza'
import Burger from './Components/Burger'
import Sushi from './Components/Sushi'
import Noodles from './Components/Noodles'
import Desserts from './Components/Desserts'
import Drinks from './Components/Drinks'
import Admin from './Components/Admin'
import Login from './Components/Login'
import OrdersPage from './Components/OrdersPage'
import AdminDashboard from './Components/AdminDashboard'
import Dashboard from './Components/Dashboard'
import AddProduct from './Components/AddProduct'
import CheckOut from './Components/CheckOut'
import { CartProvider } from './Components/CarteContext'
import ViewProductsAdmin from './Components/ViewProductsAdmin'
import EditProducts from './Components/EditProducts'
import DelivredOrders from './Components/DelivredOrders'

function App() {
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route path='/' element={<ClientInterface />}>
              <Route index exact element={<HomeFood />} />
              <Route path='about' exact element={<AboutFood />} />
              <Route path='contact' exact element={<ContactFood />} />

              <Route
                path='/products'
                element={<Products countCartItems={cartItems.length} />}
              >
                <Route path='pizza' element={<Pizza onAdd={onAdd} />} />
                <Route path='burger' element={<Burger onAdd={onAdd} />} />
                <Route path='sushi' element={<Sushi onAdd={onAdd} />} />
                <Route path='noodles' element={<Noodles onAdd={onAdd} />} />
                <Route path='desserts' element={<Desserts onAdd={onAdd} />} />
                <Route path='drinks' element={<Drinks onAdd={onAdd} />} />
                <Route
                  path='checkout'
                  element={
                    <CheckOut
                      cartItems={cartItems}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  }
                />
              </Route>
            </Route>

            <Route path='/admin' element={<Admin />}>
              <Route index exact element={<Login />} />
              <Route path='dashboard' element={<AdminDashboard />}>
                <Route index exact element={<Dashboard />} />
                <Route path='orders' element={<OrdersPage />} />
                <Route path='delivred-orders' element={<DelivredOrders />} />
                <Route path='add-products' element={<AddProduct />} />
                <Route path='view-products' element={<ViewProductsAdmin />} />
                <Route path='edit-products/:id' element={<EditProducts />} />
              </Route>
            </Route>
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
