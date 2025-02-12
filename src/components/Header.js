import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';

export const Header = () => {
    return (
        <header>
            
            <div className="logo-container">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
                <p>SFR</p>
            </div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/products">Каталог</Link>
                <Link to="/cart">Корзина</Link>
            </nav>
            <div class="feet">
                <p>Есть вопросы, звоните в любое время</p>
                <span>+7 (917) 534-25-52 <img src={phone}></img></span>
            </div>
        </header>
    );
};