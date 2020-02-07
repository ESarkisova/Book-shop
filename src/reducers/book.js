import {SET_BOOKS, SET_IS_LOAD} from "../actions/types";

const initialState = {
    books: [],
    isLoading: false
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload,
                isLoading: false
            };
        case SET_IS_LOAD:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state
        
    }
};

export default bookReducer;