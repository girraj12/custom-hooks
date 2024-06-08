import React, { useState } from "react";
import styles from "./App.module.css"; // Ensure you're importing the correct CSS module

const ProductCard = ({ image, price, description }) => {
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(count + 1);
    };

    const handleRemoveClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={styles.productCard}>
            <img src={image} className={styles.productImage} alt={description} />
            <div className={styles.productName}>{description}</div>
            <div className={styles.productPrice}>${price}</div>
            <div className={styles.buttonContainer}>
        <button onClick={handleRemoveClick} className={styles.button}> -</button>
        <span className={styles.productCount}>{count}</span>
        <button onClick={handleAddClick} className={styles.button}> +</button>
            </div>
        </div>
    );
};

export default ProductCard;
