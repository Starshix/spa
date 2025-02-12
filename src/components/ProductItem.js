
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions.js';
import { useNavigate } from 'react-router-dom';

const ProductItem = React.memo(({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = useCallback((event) => {
        event.stopPropagation();
        dispatch(actions.addItem(product));
    }, [dispatch, product]);

    const handleClick = useCallback(() => {
        navigate(`/product/${product.id}`);
    }, [navigate, product.id]);

    return (
        <div className="product-item" onClick={handleClick} style={{cursor: 'pointer'}}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Цена: {product.price} руб.</p>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    );
});

export default ProductItem;