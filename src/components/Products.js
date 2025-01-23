import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as thunks from '../redux/thunks.js';
import ProductItem from './ProductItem';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(thunks.getProducts());
    }, [dispatch]);


  if (!products || products.length === 0) {
    return (
        <div className="container">
          <h2>Загрузка товаров...</h2>
        </div>
    );
  }

  return (
    <div className="container">
      <h2>Товары</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;