import React, { useEffect } from "react";
import axios from 'axios';
import Product from './Product'


const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products')
            setProducts(response.data)
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="product-list">
                {products.mao((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </>
    )

}

export default ProductList