import { Link } from "react-router-dom";
import { productStyle } from "./../styles/product.style";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import Counter from "./Counter";
const ProductList = ({ products }) => {
    const { cartItems, addToCart } = useContext(CartContext);
    const handleAddToCart = (product) => (e) => {
        console.log(e.target.id, products);
        // but find takes O(N) complexity so pass product from html
        // const prod= products.find(p=>p.id==e.target.id);
        // console.log(prod);
        console.log(product);

        // send product info to context
        // initially value =1 when clicked on Add to Cart
        addToCart(product, 1);
    }
    const handleCountChange = (product) => (countDelta) => {
        addToCart(product, countDelta);
    }
    const countPerProduct = 0;
    return (
        <div className="product-list">
            {
                products?.map((product) => (
                    <div className={productStyle} key={product.id}>
                        <img src={product.image} />
                        <p><Link to={`/product/${product.id}`}> {product.title}</Link></p>
                        <p>Rs.{product.price}</p>
                        {
                            !cartItems[product.id]?.count ?
                                <button id={product.id} onClick={handleAddToCart(product)}>Add to Cart</button>
                                :
                                <Counter value={cartItems[product.id].count} handleCountChange={handleCountChange(product)} />
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default ProductList;