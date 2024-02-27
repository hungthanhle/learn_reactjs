import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: `Product ${products.length + 1}` };
    dispatch(addProduct(newProduct));
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
