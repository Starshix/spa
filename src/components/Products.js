import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as thunks from '../redux/thunks.js';
import ProductItem from './ProductItem';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const [sortBy, setSortBy] = useState('title'); // 'title' или 'price'
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [gender, setGender] = useState(''); // '' (все), 'men', 'women'

    useEffect(() => {
        dispatch(thunks.getProducts());
    }, [dispatch]);

    const sortedProducts = useCallback(() => {
        const sortMultiplier = sortBy === 'price'
            ? (a, b) => a.price - b.price
            : (a, b) => a.title.localeCompare(b.title);

        return [...products].sort(sortMultiplier);
    }, [products, sortBy]);

    const filteredProducts = useCallback(() => {
        let filtered = sortedProducts();

        if (minPrice !== '') {
            filtered = filtered.filter(product => product.price >= parseFloat(minPrice));
        }

        if (maxPrice !== '') {
            filtered = filtered.filter(product => product.price <= parseFloat(maxPrice));
        }

        if (gender === 'men') {
            filtered = filtered.filter(product => product.category === "мужская одежда");
        } else if (gender === 'women') {
            filtered = filtered.filter(product => product.category === "женская одежда");
        } else if (gender === 'electornik') {
            filtered = filtered.filter(product => product.category === "техника");
        } else if (gender === 'jewelry') {
            filtered = filtered.filter(product => product.category === "ювелирка");
        }

        return filtered;
    }, [sortedProducts, minPrice, maxPrice, gender]);

    if (!products || products.length === 0) {
        return (
            <div className="container">
                <h2>Загрузка товаров...</h2>
            </div>
        );
    }

    return (
        <div className="container_katalog">
            <div class="filtrs">
                <h2>Фильтры</h2>
                <div class="pod_filtrs">
                    <div class="pod_filtrs_inner">
                        <div class="pod_filtrs_1">
                            <button onClick={() => setSortBy('title')}>Сортировать по названию</button>
                            <button onClick={() => setSortBy('price')}>Сортировать по цене</button>
                        </div>

                        <div class="pod_filtrs_2">
                            <p>Цена:</p>
                            <label htmlFor="minPrice">От:</label>
                            <input
                                type="number"
                                id="minPrice"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />

                            <label htmlFor="maxPrice">До:</label>
                            <input
                                type="number"
                                id="maxPrice"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>

                        <div class="pod_filtrs_3">
                            <p>Категории</p>
                            <button onClick={() => setGender('')}>Все</button>
                            <button onClick={() => setGender('men')}>Мужская одежда</button>
                            <button onClick={() => setGender('women')}>Женская одежда</button>
                            <button onClick={() => setGender('electornik')}>Техника</button>
                            <button onClick={() => setGender('jewelry')}>Ювелирные изделия</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products_sct">
                <h2>Товары</h2>

                <div className="product-list">
                    {filteredProducts().map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Products;