import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Book from "./Book";
import {getBooks} from "../actions/book";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {addToCart, setCountBook} from "../actions/cart";

const BookApi = (props) => {
    useEffect(() => {
        props.getBooks();
    }, []);


    if(props.isLoading) {
        return 'Загрузка';
    }
    const bookId = +props.match.params.bookID;
    const book = props.books.filter(b => +b.id === bookId);


    return  (
        <>
            {book.length ? <Book
                {...book[0]}
                addToCart = {props.addToCart}
                setCountBook = {props.setCountBook}
                cart = {props.cart}/> : 'Книга отсутсвует в каталоге'}

        </>

    );
};

const mapStateToProps = ({book, cart}) => ({
    books: book.books,
    isLoading: book.isLoading,
    cart: cart.items
});

export default compose(withRouter, connect(mapStateToProps, {getBooks, addToCart, setCountBook}))(BookApi);