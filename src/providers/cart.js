import { createContext,useState } from "react";

export const CartContext = createContext([])

export function CartProvider({children}){

    const [cart,setCart] = useState([])
    const [id,setId] = useState(Math.random() * 999)

    const addCart = (item)=> {

        item.id = id

        setCart([...cart,item])

        setId(Math.random() * 999)
    }

    const deleteFromCart = (itemId)=> {

        const newCart = cart.filter((item)=> item.id !== +itemId)

        setCart(newCart)
    }

    function sumTotal(){

        let total = 0
        let count = 0
    
        cart.forEach((item)=>{
    
            total += item.price
            count++
        })
    
        return{
            total: total,
            count: count
        }
    
    }

    return(
        <CartContext.Provider
        value={{cart,addCart,deleteFromCart,sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}