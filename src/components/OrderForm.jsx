import {drinkData, foodData} from './menu'
import {useState} from 'react'
import './OrderForm.css'

function OrderForm ({order, setOrder}) {

    const [drink, setDrink] = useState("")
    const [food, setFood] = useState("")
    const [addOn, setAddOn] = useState('')
    const [shots, setShots] = useState(0)
    const [name, setName] = useState("")



    const handleForm = (e) => {
        e.preventDefault()

        const newOrder = {
            newDrink: drink,
            newFood: food,
            shots: shots,
            name: name,
            addOn: addOn,
        }

        setOrder([...order, newOrder])

        setAddOn('')
        setName('')
        setDrink('')
        setFood('')
        setShots(0)
    }
    
    console.log(order)

    return (

        <div >
            <h2>Place Order</h2>

            <form className='orderForm' onSubmit={handleForm}>

                <input type="text" value={name} placeholder='Your Name'
                    onChange={e => setName(e.target.value)} />

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

                <select name="" id=""
                    value={addOn} onChange={e => setAddOn(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Milk">Milk</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Creme">Creme</option>
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

        </div>
    )
}

export default OrderForm