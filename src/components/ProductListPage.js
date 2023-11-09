import {css} from "@emotion/css";
import {useEffect,useState} from "react";
import ProductList from "./ProductList";
import BasketFlyout from "./BasketFlyout";
const ProductListPage = ()=>{
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=> setProducts(data));
    },[])
    return(
        <div className="product-list-page">
            <ProductList products={products}/>
            <BasketFlyout/>
        </div>
    )
}
export default ProductListPage;