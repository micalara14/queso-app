//Firestore
import { db } from ".";
import { getDocs, collection, addDoc, query, where, documentId, writeBatch} from 'firebase/firestore'
//Sweet Alert
import swal from 'sweetalert';

export const getProducts = (category) => {
    return new Promise((setProducts, reject) => {
        const collectionRef = category
        ? query(collection(db, "productos"), where("category", "==", category))
        : collection(db, "productos")

        getDocs(collectionRef).then(response => {
            const products = response.docs.map (doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            reject(error)
        })
})
}

export const setOrders = (cart, order) => {
        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(db)
        const outOfStock = []
        const collectionRefProd = collection(db, 'productos')

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
            swal('Gracias por su compra!',`El id de la orden es: ${id}.
            Nos comunicaremos con usted.`)
        }).catch(error => {
            console.log(error)
            swal('Error',`Algunos productos estan fuera de stock`)
        })
}
