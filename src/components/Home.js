import React from 'react';
import logo from '../../assets/images/logo.svg';

export const Home = () => {
    return (
        <div className="container_home">
            <img src={logo}></img>
            <h2>Магазин хорошей и качественной одежды</h2>
            <p>В нашем каталоге всегда актуальная одежда, для человека любого возраста и пола!!!</p>
        </div>
    );
};
