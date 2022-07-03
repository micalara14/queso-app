//Firestore
import { db } from ".";
import { getDocs, collection, query, where} from 'firebase/firestore'

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
        }).finally(() => {
            setLoading(false)
        })
})
}