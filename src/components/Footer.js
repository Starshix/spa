import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import wk from '../../assets/images/wk.svg';
import tg from '../../assets/images/tg.svg';
import inst from '../../assets/images/inst.svg';

export const Footer = () => {
    return (
        <footer>
            <div class="footer_inner">
                <div className="logo-container">
                    <Link to="/"><svg width="75" height="42" viewBox="0 0 75 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9935 39.0582L23.6878 41.3557H51.3561L49.0504 39.0582L46.7447 36.7607H37.5219L0.630859 0L37.5219 27.5705L74.413 0L37.5219 36.7607H28.2992L25.9935 39.0582Z" fill="white" />
                    </svg></Link>
                    <p>Store For Retale</p>
                </div>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/products">Каталог</Link>
                    <Link to="/cart">Корзина</Link>
                </nav>
                <div class="feet">
                    <img src={tg} />
                    <img src={wk} />
                    <img src={inst} />
                </div>
            </div>
            <p class="cop_footer">© 2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
        </footer>
    );
};