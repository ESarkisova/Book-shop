import React from 'react';
import {Image, Table} from "semantic-ui-react";

const Cart = (props) => {
    return (
        <div className = "cartWrap">
            <Table celled selectable>
                <Table.Body>
                    {props.cart.length? props.cart.map(cartItem =>
                        (<Table.Row key = {cartItem.id}>
                            <Table.Cell><Image src={cartItem.image}  size='small'  /></Table.Cell>
                            <Table.Cell>{cartItem.title}</Table.Cell>
                            <Table.Cell>{cartItem.author}</Table.Cell>
                            <Table.Cell >{cartItem.price}</Table.Cell>
                            <Table.Cell >{cartItem.count}</Table.Cell>
                            <Table.Cell icon><strong>{cartItem.count*cartItem.price}</strong></Table.Cell>
                        </Table.Row>))
                        : <Table.Row><Table.Cell width={'3'}>Корзина пуста</Table.Cell></Table.Row>}
                    {props.total > 0 ?
                        <Table.Row>
                            <Table.Cell colSpan='5'>Итого:</Table.Cell>
                            <Table.Cell><strong>{props.total}</strong></Table.Cell>
                        </Table.Row>
                        : null}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Cart;