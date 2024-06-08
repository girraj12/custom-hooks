import { useState, useEffect } from "react";
const useProducts =()=>{

const [products, setProducts] = useState([]);

// useEffect(() => {
//   getProducts();
// }, []);
const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  setProducts(products);
}
getProducts();

 return {products};

}
export default useProducts;
