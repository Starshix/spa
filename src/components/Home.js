import React, { useMemo, useEffect } from 'react';
import photoclothes from '../../assets/images/photoclothes.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as thunks from '../redux/thunks.js';
import ProductItem from './ProductItem';

export const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(thunks.getProducts());
    }, [dispatch]);

    const newProducts = useMemo(() => {
        return products ? products.filter(product => product.new === true) : [];
    }, [products]);

    // Фильтруем товары для "Топ продаж"
    const topSalesProducts = useMemo(() => {
        return products ? products.filter(product => product.top === true) : [];
    }, [products]);

    return (
        <div className="container_home">
            <div className="container_home_inner">
                <div className="clothes">
                    <p className="clothes_p">
                        НАЙДИТЕ ОДЕЖДУ, СООТВЕТСТВУЮЩУЮ ВАШЕМУ СТИЛЮ
                    </p>
                    <p className="clothes_p2">
                        Ознакомьтесь с нашим разнообразным ассортиментом тщательно продуманной одежды, которая подчеркнёт вашу индивидуальность и удовлетворит ваше чувство стиля.
                    </p>
                    <Link to="/products">
                        <button>
                            Каталог
                        </button>
                    </Link>

                    <div className="clothes_prem">
                        <div className="clothes_prem_1">
                            <p className="clothes_prem_p1">
                                200+
                            </p>
                            <p className="clothes_prem_p2">
                                Международные бренды
                            </p>
                        </div>
                        <div className="clothes_prem_2"></div>
                        <div className="clothes_prem_1">
                            <p className="clothes_prem_p1">
                                2,000+
                            </p>
                            <p className="clothes_prem_p2">
                                Высококачественная продукция
                            </p>
                        </div>
                        <div className="clothes_prem_2"></div>
                        <div className="clothes_prem_1">
                            <p className="clothes_prem_p1">
                                30,000+
                            </p>
                            <p className="clothes_prem_p2">
                                Довольные клиенты
                            </p>
                        </div>
                    </div>
                </div>
                <img src={photoclothes} alt="Clothes" />
            </div>
            <div class="products_new">
                <div className="new-products-section">
                    <h2>Новые товары</h2>
                    <div className="product-list">
                        {newProducts.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="top-sales-section">
                    <h2>Топ продаж</h2>
                    <div className="product-list">
                        {topSalesProducts.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
};