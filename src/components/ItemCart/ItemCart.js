//context
import { useContext } from "react"
import CartContext from "../../context/CarContext"
//CSS
import './ItemCart.css'

const ItemCart = () => {

    const {cart} = useContext(CartContext)

    return (
        <div className="item-cart">
            {cart.map(prod => <div key={prod.id}> <p>{prod.name}</p> <p>Cantidad: {prod.quantity}</p> <p>Subtotal: ${prod.quantity*prod.price}</p> </div>)}
        </div>
    )
}

export default ItemCart