import {drinkData, foodData} from './menu'
import {useState} from 'react'

function OrderForm ({order, setOrder}) {

    const [drink, setDrink] = useState("")
    const [food, setFood] = useState("")
    const [shots, setShots] = useState(0)


    const handleForm = (e) => {
        e.preventDefault()

        const newOrder = {
            newDrink: drink,
            newFood: food,
            shots: shots,
        }

        setOrder([...order, newOrder])

        setDrink('')
        setFood('')
        setShots(0)

    }
    
    console.log(order)

    return (

        <>
        <p>{drink}</p>

            <form onSubmit={handleForm}>

                <select value={drink} onChange = {e => setDrink(e.target.value)}>
                    <option></option>
                    {drinkData.map((item, index) => (
                        <option value={item.drink} key={index}>{item.drink}</option>
                    ))
                    
                    } 

                </select>

                <select value={shots} onChange = {e => setShots(e.target.value)}>
                    <option value={0}></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>

                 <select value={food} onChange = {e => setFood(e.target.value)}>
                    <option></option>
                    {foodData.map((item, index) => (
                        <option key={index} value={item.food}>{item.food}</option>
                    ))
                    
                    } 
                </select>

                <button type='submit'>Place Order</button>
            </form>

        </>
    )
}

export default OrderForm