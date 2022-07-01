//useState useContext
import { useState } from 'react';
import { useContext } from "react"
import CartContext from "../../context/CarContext"
//Firestore
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
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
    const ids = cart.map(prod => prod.id)
    const collectionRefProd = collection(db, 'productos')
    const batch = writeBatch(db)
    const outOfStock = []

    const createOrder = () => {
        const order = {
            buyer,
            items: cart,
            total: getTotal()
        }

        getDocs(query(collectionRefProd, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionOrder = collection(db, 'orders')
                return addDoc(collectionOrder, order)
            } else {
                return Promise.reject({ type: 'out_of_stock', products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            swal('Gracias por su compra!',`El id de la orden es: ${id}. Nos comunicaremos con usted.`)
        }).catch(error => {
            console.log(error)
            swal('Error',`Algunos productos estan fuera de stock`)
        })
}

    return (
        <div className='div-form'>
            <h3>Complete el formulario para finalizar la compra:</h3>
            <form>
            <label for="name">Ingrese su nombre</label>
            <input id="name" value={buyer.name} placeholder="Nombre" onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
            <label for="email">Ingrese su email</label>
            <input id="email" value={buyer.email} type="email" placeholder="Email" onChange={(e) => setBuyer({...buyer, email: e.target.value})} />
            <label for="phone">Ingrese su teléfono</label>
            <input id="phone" value={buyer.phone} type="number" placeholder="Teléfono" onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
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