import {CHANGE_SEARCH, SET_SORT} from "../actions/types";


const initialState = {
    filter: 'all',
    searchText: ''
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                ...state,
                filter: action.payload
            };
        case CHANGE_SEARCH:
            return {
                ...state,
                searchText: action.payload
            };

        default:
            return state
        
    }
};

export default filterReducer;