import {SET_BOOKS, SET_IS_LOAD} from "./types";
import * as axios from "axios";

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books
});

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOAD,
    payload: isLoading
});

export const getBooks = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        const books = await axios.get('/books.js');
        dispatch(setBooks(books.data));
    };
};