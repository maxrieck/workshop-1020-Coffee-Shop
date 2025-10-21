import './App.css'
import CoffeeOrder from './components/CoffeeOrder'
import { useState } from 'react'
import CoffeeMenu from './components/CoffeeMenu'
import OrderForm from './components/OrderForm'


function App() {

  const [order, setOrder] = useState([])

  const [showMenu, setShowMenu] = useState(false)
  const [showForm, setShowForm] = useState(false)

 

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowMenu(true)
            setShowForm(false)
          }}
        >Menu</button>

        <button
          onClick={() => {
            setShowMenu(false)
            setShowForm(true)
          }}
        >Place Order</button>
      </div>
      
      {showMenu &&
        <CoffeeMenu />      
      }
      
      {showForm &&
      <>
        <OrderForm order={order} setOrder={setOrder} />
        <CoffeeOrder order={order} />
      </>      
      }
    </>
  )
}

export default App