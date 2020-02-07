import React from 'react';
import {Grid, Card, Icon, Image, Breadcrumb, Button} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import {NavLink} from "react-router-dom";

const Book = ({id, title, link, image, author, price, rating, addToCart, countInCart, bookForAdd}) => {


    return (
        <>
            {link ? null
                : <Breadcrumb size='tiny'>
                    <Breadcrumb.Section><NavLink to='/books'>К списку</NavLink></Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section active>{title}</Breadcrumb.Section>
                </Breadcrumb>}
            <Card>
                <Image src={image} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{link ?
                        <NavLink to={link}>{title}</NavLink>
                        : title}
                    </Card.Header>
                    <Card.Description>
                        {author}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Grid columns={2} padded>
                        <Grid.Column>

                            <a>
                                <Icon name='rub'/>
                                {price}
                            </a>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                            <a>
                                <Icon name='star'/>
                                {rating}
                            </a>
                        </Grid.Column>
                    </Grid>
                    <Button color='teal' fluid onClick={() => addToCart(bookForAdd, countInCart+1)}>Добавить в корзину ({countInCart})</Button>

                </Card.Content>
            </Card>
        </>


    );
};

const BookContainer = (props) => {

    const title = props.title.length < 30 ?
    props.title
    : props.title.substr(0, 23) + '...';
    const bookForAdd = {
        id: props.id,
        title: props.title,
        author: props.author,
        price: props.price,
        image: props.image
    };

    const countInCart = props.cart.findIndex(cartItem => cartItem.id === props.id);




    return <Book id = {props.id}
                 image = {props.image}
                 author = {props.author}
                 price = {props.price}
                 rating={props.rating}
                 link = {props.link}
                 bookForAdd = {bookForAdd}
                 title = {title}
                 addToCart = {countInCart >= 0 ? props.setCountBook : props.addToCart}
                 countInCart = {countInCart >= 0 ? props.cart[countInCart].count : 0} />;
};



export default BookContainer;