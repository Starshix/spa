import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);

    if(cartItems.length === 0){
       return (
          <div className="container">
              <h2>Корзина пустая</h2>
            </div>
        );
    }
    return (
        <div className="container">
            <h2>Ваша корзина с товарами</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;