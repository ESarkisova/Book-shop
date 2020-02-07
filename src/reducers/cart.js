import {ADD_TO_CART, CART_IS_SHOW, CHANGE_COUNT_BOOK, REMOVE_FROM_CART} from "../actions/types";

const initialState = {
    items: [],
    isShow: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_IS_SHOW:
            return {
                ...state,
                isShow: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, {...action.payload, count: 1}]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: [...state.items.filter((cartItem) => +cartItem.id !== +action.payload) ]
            };
        case CHANGE_COUNT_BOOK:
            return {
                ...state,
                items: state.items.map((cartItem) => {
                   if(+cartItem.id === +action.payload.id) cartItem.count = +action.payload.count;
                       return cartItem
                })
            };
        default:
            return state
        
    }
};

export default cartReducer;