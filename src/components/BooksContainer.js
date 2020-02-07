import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Books from "./Books";
import {getBooks} from "../actions/book";
import {getBookRslc} from "../selectors/selectors";
import {addToCart, setCountBook} from "../actions/cart";

const BookApi = (props) => {
    useEffect(() => {
        props.getBooks();
    }, []);

    return <Books {...props}/>
};

const mapStateToProps = (state) => ({
    books: getBookRslc(state),
    isLoading: state.book.isLoading,
    cart: state.cart.items
});

export default connect(mapStateToProps, {getBooks, addToCart, setCountBook})(BookApi);