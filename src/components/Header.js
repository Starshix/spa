import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import wk from '../../assets/images/wk.svg';
import tg from '../../assets/images/tg.svg';
import inst from '../../assets/images/inst.svg';

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/products">Каталог</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/profile">Профиль</Link>
            </nav>
            <div class="feet">
                <img src={tg}/>
                <img src={wk}/>
                <img src={inst}/>
            </div>
        </header>
    );
};