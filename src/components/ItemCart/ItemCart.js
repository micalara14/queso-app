//context
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CarContext"
//CSS
import './ItemCart.css'
// Bootstrap
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
//Componentes
import ItemForm from "../ItemForm/ItemForm";

const ItemCart = () => {
    const {cart, removeItem, deleteAll, getTotal} = useContext(CartContext)
    const total = getTotal()

    return (
        <div>
        <div className="item-cart">
            {cart.length < 1 ? <div className="carrito-vacio" > <p className="titulo-carrito" >No hay productos en el carrito</p> <Link to="/"> Vovler a la tienda </Link> </div> : <p className="titulo-carrito" >Carrito de compras</p>}
            {cart.map(prod => <Card key={prod.id} className="card-carrito"> <p>{prod.name}</p> <p>Cantidad: {prod.quantity}</p> <p>Subtotal: ${prod.quantity*prod.price}</p>  <Button onClick={() => removeItem(prod.id)} variant="warning"> X </Button> </Card>)}
        </div>
            {cart.length > 0 ?  <div> <p className="total-compra" >Total de su compra: ${total}</p> <Button onClick={() => deleteAll()} variant="warning"> Vaciar carrito </Button> <ItemForm/> </div> : null}
        </div>
    )
}

export default ItemCart