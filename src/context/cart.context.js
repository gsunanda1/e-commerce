import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartItems,setCartItems]=useState(
        //how to store 1. assume array
        // but if we take array we are unable to maintain countPerProduct for add to cart functionality.
        // so store as below
        // id1:{
        //     count:10,
        //     product:{}
        // }
        []
    );

    const addToCart=(product,countDelta)=>{
        // we are able to see info of products now
        console.log(product);
        // so now how should I store info on setCartItems
        // assume it is arry
        setCartItems((prevValue)=>{
            //return [...prevValue,product];
            return{
                ...prevValue,
                [product.id]:prevValue[product.id]?{
                    count:prevValue[product.id].count+countDelta,
                    product,
                } : {
                    count:countDelta,
                    product,
                }
            }
        });
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;

//wrap this provider in App.js