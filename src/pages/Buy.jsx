
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Buy() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // Fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://safetronicecommerceserver.onrender.com/api/shop/products/get');
      const allProducts = response.data.data;
      setProducts(allProducts);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // Shuffle the array to select random products
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Filter and display products based on the criteria
  const filterProducts = () => {
    const productMap = new Map();
    let tempProducts = [];
    let selectedProducts = [];

    // Shuffle all products to get random ones
    const shuffledProducts = shuffleArray([...products]);

    // Loop through shuffled products and pick until we have 12
    shuffledProducts.forEach((product) => {
      if (tempProducts.length >= 12) return; // Stop when we have 12 products

      // Ensure no more than 2 products per category/brand
      const key = `${product.category}-${product.brand}`;

      if (!productMap.has(key)) {
        productMap.set(key, 0);
      }

      if (productMap.get(key) < 2) {
        tempProducts.push(product);
        productMap.set(key, productMap.get(key) + 1);
      }
    });

    // Ensure we get exactly 12 products
    selectedProducts = tempProducts.slice(0, 12);
    setDisplayedProducts(selectedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [products]);

  if (displayedProducts.length === 0) {
    return <div className="text-white text-center mt-12">Loading...</div>;
  }

  return (
    <div className="mt-12 min-h-screen bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 p-6 flex flex-wrap justify-center gap-6">
      {displayedProducts.map((product) => (
        <div
          key={product._id}
          className="bg-white text-black rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all w-72"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg p-5"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between mb-2 text-sm font-medium capitalize">
              <span>{product.category}</span>
              <span>{product.brand}</span>
            </div>
            <div className="text-lg font-semibold text-blue-600 mb-3">
              ر.ق {product.salePrice > 0 ? product.salePrice : product.price}
            </div>
            <button
              onClick={() => window.location.href = 'https://safetronicstore.onrender.com/shop/home'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Buy;

