import React from 'react'
import {drinkData, foodData} from './menu'

const CoffeeMenu = () => {
  return (

    <>

    <div>
        <h2>🍵Coffee menu</h2>
            <ul>
        {
            drinkData.map((item, index) => (
               
                    <li key={index}>{item.drink} ${item.price}</li>
               
            ))
        }
            </ul>

    </div>

    <div>
        <h2>🍵Food menu</h2>
            <ul>
        {
            foodData.map((item, index) => (
               
                    <li key={index}>{item.food} ${item.price}</li>
               
            ))
        }
            </ul>

    </div>

    </>
  )
}

export default CoffeeMenu