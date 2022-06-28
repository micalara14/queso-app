import { useState } from 'react';

//Firestore
import { addDoc, collection} from "firebase/firestore"
import { db } from '../../services/firebase';
// Bootstrap
import { Button } from 'react-bootstrap';
//context
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CarContext"

const ItemForm = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        comment: ""
    });

    const {cart, getTotal} = useContext(CartContext)
    const total = getTotal()

    const createOrder = () => {
        const order = {
            buyer,
            items: cart,
            total: getTotal()
        }
        const collectionRef = collection(db, "orders")

        addDoc(collectionRef, order).then(({id}) => {
        alert(`Se creo la orden con el id ${id}`)
        console.log(`Se creo la orden con el id ${id}`)
        })
        
    }


    return (
        <div>
            <h3>Complete el formulario para finalizar la compra:</h3>
            <form>
            <input value={buyer.name} placeholder="Nombre" onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
            <input value={buyer.email} placeholder="Email" onChange={(e) => setBuyer({...buyer, email: e.target.value})} />
            <input value={buyer.phone} placeholder="Teléfono" onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
            <input value={buyer.adress} placeholder="Dirección" onChange={(e) => setBuyer({...buyer, adress: e.target.value})} />
            <input value={buyer.comment} placeholder="Comentarios" onChange={(e) => setBuyer({...buyer, comment: e.target.value})} />

            </form>
            {buyer.name != "" && buyer.email != "" && buyer.phone != "" && buyer.adress != "" && buyer.comment != "" ? <Button onClick={createOrder} variant="warning"> Crear orden </Button> : null}
            
        </div>
    )

}

export default ItemForm