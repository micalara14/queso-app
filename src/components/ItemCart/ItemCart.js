//context
import { useContext } from "react"
import CartContext from "../../context/CarContext"
//CSS
import './ItemCart.css'



const ItemCart = () => {

    const {cart, removeItem, deleteAll} = useContext(CartContext)



    return (
        <div>
        <div className="item-cart">
            {cart.map(prod => <div key={prod.id}> <p>{prod.name}</p> <p>Cantidad: {prod.quantity}</p> <p>Subtotal: ${prod.quantity*prod.price}</p> <button  onClick={() => removeItem(prod.id)}>X</button> </div>)}
        </div>
        {/* <button onClick={() => deleteAll()}>Vaciar carrito</button> */}
        {cart.length > 0 ? <button onClick={() => deleteAll()}>Vaciar carrito</button> : null}
        </div>
        
        
    )
}

export default ItemCart