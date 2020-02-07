import {combineReducers} from "redux";
import book from './book.js';
import filter from './filter.js';
import cart from './cart.js';

export default  combineReducers({
    book,
    filter,
    cart
});