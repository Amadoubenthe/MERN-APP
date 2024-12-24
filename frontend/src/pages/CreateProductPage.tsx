import React, { useState } from "react";

function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product creation logic here
    console.log({
      name: productName,
      description: productDescription,
      price: productPrice,
    });
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Product Description:</label>
          <textarea
            id="description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input
            type="text"
            id="price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
