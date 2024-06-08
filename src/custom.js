import React from "react";
import ProductCard from "./productCard";
import useProducts from "./useProducts";
import styles from './App.module.css'; // Ensure you're importing the correct CSS module

const ProductList = () => {
    const { products } = useProducts();
    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <ProductCard
                    // key={product.id}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductList;
