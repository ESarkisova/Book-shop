import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Books from "./Books";
import {getBooks} from "../actions/book";

const BookApi = (props) => {
   useEffect(() => {
        props.getBooks();
    }, []);

    return <Books {...props}/>
};

const mapStateToProps = ({ book }) => ({
    books: book.books,
    isLoading: book.isLoading
});

export default connect(mapStateToProps, {getBooks})(BookApi);