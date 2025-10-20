

function CoffeeOrder ({order}) {
    return (
        <div>
            <h2>Orders</h2>

            <ul>
                {order.map((item, index) => (
                    <li key={index}>{item.newDrink} - {item.shots}</li>
                ))}
            </ul>

            
        </div>
    )
}

export default CoffeeOrder