import * as actions from './actions.js';

const initialState = {
    products: [],
    cart: [],
    formData: {}
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case actions.ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
         case 'SAVE_FORM_DATA':
            return {
                ...state,
               formData: action.payload
            };
        default:
            return state;
    }
}