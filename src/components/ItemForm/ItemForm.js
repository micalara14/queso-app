//useState useContext
import { useState } from 'react';
import { useContext } from "react"
import CartContext from "../../context/CarContext"
//Firestore
import { addDoc, collection} from "firebase/firestore"
import { db } from '../../services/firebase';
// Bootstrap
import { Button } from 'react-bootstrap';
//CSS
import "./ItemForm.css"
//Sweet Alert
import swal from 'sweetalert';

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
        swal(`Se creo la orden con el id ${id}.
        Gracias por su compra! Nos pondremos en contacto.`)
        })
        
    }


    return (
        <div className='div-form'>
            <h3>Complete el formulario para finalizar la compra:</h3>
            <form>
            <label for="name">Ingrese su nombre</label>
            <input id="name" value={buyer.name} placeholder="Nombre" onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
            <label for="email">Ingrese su email</label>
            <input id="email" value={buyer.email} placeholder="Email" onChange={(e) => setBuyer({...buyer, email: e.target.value})} />
            <label for="phone">Ingrese su teléfono</label>
            <input id="phone" value={buyer.phone} placeholder="Teléfono" onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
            <label for="adress">Ingrese su dirección completa</label>
            <input id="adress" value={buyer.adress} placeholder="Dirección" onChange={(e) => setBuyer({...buyer, adress: e.target.value})} />
            <label for="comment">Comentarios o notas a tener en cuenta</label>
            <input id="comment" value={buyer.comment} placeholder="Comentarios" onChange={(e) => setBuyer({...buyer, comment: e.target.value})} />

            </form>
            {buyer.name != "" && buyer.email != "" && buyer.phone != "" && buyer.adress != "" && buyer.comment != "" ? <Button className="btn-comprar" onClick={createOrder} variant="warning"> Crear orden </Button> : null}
            
        </div>
    )

}

export default ItemForm