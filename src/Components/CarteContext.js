import { createContext, useState } from 'react'

const CarteContext = createContext()

export const CartProvider = ({ children }) => {
  const [item, setItems] = useState([])

  const [cartItems, setCartItems] = useState([])

  const [disable, setDisable] = useState('disabled-link')

  const newArray = Array.from(
    new Set(item.map((el) => JSON.stringify(el)))
  ).map((el) => JSON.parse(el))

  const AaddToCart = (order) => {
    setItems([...item, order])
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      console.log(exist)
      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id
      //       ? console.log('true x.id and prudct.id equal', x.id)
      //       : console.log('not equal', product.id)
      //   )
      // )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      console.log(cartItems)
    }
  }

  return (
    <CarteContext.Provider
      value={{
        item,
        AaddToCart,
        onAdd,
        newArray,
        disable,
        setDisable,
      }}
    >
      {children}
    </CarteContext.Provider>
  )
}

export default CarteContext
