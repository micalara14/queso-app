//context
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CarContext"
//CSS
import './ItemCart.css'



const ItemCart = () => {

    const {cart, removeItem, deleteAll} = useContext(CartContext)



    return (
        <div>
        <div className="item-cart">
            {cart.length < 1 ? <div> <p>No hay productos en el carrito</p> <Link to="/"> Vovler a la tienda </Link> </div> : <p>Carrito de compras</p>}
            {cart.map(prod => <div key={prod.id}> <p>{prod.name}</p> <p>Cantidad: {prod.quantity}</p> <p>Subtotal: ${prod.quantity*prod.price}</p> <button  onClick={() => removeItem(prod.id)}>X</button> </div>)}
        </div>
            {cart.length > 0 ? <button onClick={() => deleteAll()}>Vaciar carrito</button> : null}
        </div>
        
        
    )
}

export default ItemCart