import { useState, createContext, useContext } from "react";
import NotificationContext from "../notifications/Notification";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const {setNotification} = useContext(NotificationContext)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd]);
          
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return productUpdated
                } else {
                    return prod 
                }
            })
            setCart(cartUpdated)
        }
        
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity;
        })
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id);
        if(cartWithoutItem.length===0){
            
        }
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setNotification('No hay productos en el carrito', 'error',2)
        setCart([])
    }

    const getProductQuantity = (id) => {
        const products = cart.find(prod => prod.id === id)
        return products?.quantity
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += (prod.quantity*prod.price);
        })
        
        return total
    }

    return (
        <CartContext.Provider
            value={{ cart, addItem, isInCart, removeItem, clearCart, getQuantity, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}
