import React from 'react';
import {Header, Icon,  Menu} from "semantic-ui-react";
import Search from "./Search";
import {connect} from "react-redux";
import {removeFromCart, setCountBook, showCart} from "../actions/cart";
import {getTotalCartRslc} from "../selectors/selectors";
import Cart from "./Cart";

const MainMenu = (props) => {
    return (
        <Menu secondary>
            <Menu.Item>
            <Header as='h3'>
                <Icon name='book' />
                <Header.Content>BookShop</Header.Content>
            </Header>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Search />
                </Menu.Item>
                <Menu.Item
                    onMouseEnter = {() => props.showCart(true)}
                    onMouseLeave = {() => props.showCart(false)}>
                    <Icon name='cart arrow down'/>
                    <span>Итого: <strong>{props.total}</strong> <Icon name='rub'/></span>
                    {props.isShow ? <Cart cart = {props.cart} total = {props.total}/> : null}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart.items,
    isShow: state.cart.isShow,
    total: getTotalCartRslc(state)
});

export default connect(mapStateToProps, {showCart, removeFromCart, setCountBook})(MainMenu);
