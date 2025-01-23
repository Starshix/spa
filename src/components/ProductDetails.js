import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    const { id } = useParams();
     const products = useSelector(state => state.products);

      if (!products || products.length === 0) {
      return (
        <div className="container">
          <h2>Загрузка информации...</h2>
        </div>
      );
  }

    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return (
            <div className="container">
                <h2>Товар не найден</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Подробная информация от товаре</h2>
             <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Цена: ${product.price}</p>
              <p>{product.description}</p>
         </div>
    );
};

export default ProductDetails;