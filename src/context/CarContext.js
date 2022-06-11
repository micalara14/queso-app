//Use State y Context
import { useState, createContext, useEffect } from "react";


const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                return prod 
                }
            })
            setCart(newCart)
        }
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id )
        setCart(products)
    }

    const deleteAll = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getProduct, removeItem, deleteAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
