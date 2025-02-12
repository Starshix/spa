import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);

    if (cartItems.length === 0) {
        return (
            <div className="container">
                <h2>Корзина пустая</h2>
            </div>
        );
    }

    return (

        <div className="container">
            <div class="container_cart">
                <h2>Ваша корзина с товарами</h2>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Цена: ${item.price}</p>
                        </div>
                    </div>
                ))}
                <Link to="/order" class="checkout-button">
                    <button>Оформить заказ
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Cart;