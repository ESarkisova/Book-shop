import {ADD_TO_CART, CART_IS_SHOW, CHANGE_COUNT_BOOK, REMOVE_FROM_CART} from "./types";

export const showCart = (isShow) => ({
   type: CART_IS_SHOW,
   payload: isShow
});

export const addToCart = (book) => ({
    type: ADD_TO_CART,
    payload: book
});

export const removeFromCart = (bookId) => ({
    type: REMOVE_FROM_CART,
    payload: bookId
});

export const setCountBook = (book, count) => ({
    type: CHANGE_COUNT_BOOK,
    payload: {id: book.id, count}
});