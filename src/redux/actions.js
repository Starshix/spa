export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_ITEM = 'ADD_ITEM';

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
}

export function addItem(product) {
    return {
        type: ADD_ITEM,
        payload: product
    };
}