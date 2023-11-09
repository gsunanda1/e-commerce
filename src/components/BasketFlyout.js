import { useContext, useMemo } from "react";
import { CartContext } from "../context/cart.context";

const BasketFlyout = () => {
    const { cartItems } = useContext(CartContext);
    // if cartItems is array
    // const totalValue = Math.floor(cartItems.reduce((acc,item)=>{
    //     acc+=item.price;
    //     return acc;
    // },0));

    // Now cartItems is obj

    // here use useMemo bcoz computation is done on every re-render
    const totalValue = useMemo(()=>Math.floor(Object.values(cartItems).reduce((acc,item)=>{
            acc+=((item.product.price)*(item.count));
            return acc;
         },0)),[cartItems]);
    return (
        <>
            {
                totalValue &&
                <div className="basket-flyout">
                    Basket Rs.{totalValue}
                </div>
            }
        </>
    )
}

export default BasketFlyout;