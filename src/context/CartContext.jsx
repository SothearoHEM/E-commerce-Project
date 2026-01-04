import React,{createContext,useState} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const itemsInCart = cartItems.find((item) => item.id === product.id);
        if (itemsInCart) {
            const updatedCart = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCart);
            return;
        }
        setCartItems([...cartItems, {...product, quantity: 1 }]);
        toast.success("Item added to cart successfully!");
    }
    const updateQuantity = (cartItems,productId,action) => {  
        setCartItems(cartItems.map((item) => {
            if (item.id === productId) {
                let newUnit = item.quantity;
                if (action === 'increment') {
                    newUnit += 1;
                    toast.success("Increased item quantity!");
                } else if (action === 'decrement' && newUnit > 1) {
                    toast.success("Decreased item quantity!");
                    newUnit -= 1;
                }
                return newUnit > 0 ? { ...item, quantity: newUnit } : null;
            }
            return item;
        }
        ).filter(item => item != null));
    }
    const deleteItem = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        toast.success("Item removed from cart!");
    }

    return <CartContext.Provider value={{ cartItems, setCartItems, addToCart, updateQuantity, deleteItem }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => React.useContext(CartContext);