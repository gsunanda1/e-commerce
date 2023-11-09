import {css} from "@emotion/css";
import { useContext,useMemo} from "react";
import { CartContext } from "../context/cart.context";
const HeaderCss=css`
display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: bisque;
  box-sizing: border-box;

`;
const Header=()=>{
    const {cartItems} = useContext(CartContext);
    const countInCart = useMemo(()=>Object.values(cartItems).reduce((acc,item)=>{
        acc+=item.count;
        return acc;
    },0),[cartItems])
    return(
        <div className={HeaderCss}>
            <div>E-commerce</div>
            <div>Cart ({countInCart})</div>
        </div>
    )
}
export default Header;