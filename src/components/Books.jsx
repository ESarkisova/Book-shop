import React from 'react';
import Book from "./Book";
import {Card, Grid} from "semantic-ui-react";
import Sidebar from "./SidebarContainer";

const Books = ({books, addToCart, cart, setCountBook}) => {
    return (
        <Grid>
            <Grid.Column width={13}>
                <Card.Group>
                    {books.length ?
                        books.map(book => (<Book
                            key={book.id}
                            {...book}
                            link={'/book/'+book.id}
                            addToCart = {addToCart}
                            cart = {cart}
                            setCountBook = {setCountBook}/>))
                        : "Не найдено"}
                </Card.Group>
            </Grid.Column>
            <Grid.Column width={3}>
                <Sidebar/>
            </Grid.Column>
        </Grid>

    );
};

export default Books;