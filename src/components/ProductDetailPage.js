import { useParams } from "react-router-dom"
import { productStyle } from "../styles/product.style";
import { useEffect, useState } from "react";

const ProductDetailPage = ()=>{
    const {productId }= useParams();
    const [product,setProducts] = useState({});
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(json=> setProducts(json));
    },[])
    return(
            <div className={productStyle} key={product.id}>
                    <img src={product.image}/>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>Rs.{product.price}</p>
            </div>
    )
}
export default ProductDetailPage;