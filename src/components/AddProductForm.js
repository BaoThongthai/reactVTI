// AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [newProductName, setNewProductName] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      name: newProductName,
      image: newProductImage,
      price: newProductPrice,
    };

    onAddProduct(newProduct);
    // Clear form fields after adding a new product
    setNewProductName('');
    setNewProductImage('');
    setNewProductPrice('');
  };

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          className="form-control"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="productImage">Image URL:</label>
        <input
          type="text"
          id="productImage"
          className="form-control"
          value={newProductImage}
          onChange={(e) => setNewProductImage(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="productPrice">Price:</label>
        <input
          type="text"
          id="productPrice"
          className="form-control"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
