import React from 'react';
import {Menu} from "semantic-ui-react";

const Sidebar = (props) => {
    return (
        <Menu vertical>
            <Menu.Item
                active={props.filter === 'all'}
                onClick={() => props.setSort('all')}
            >
                По умолчанию
            </Menu.Item>

            <Menu.Item
                active={props.filter === 'price_l'}
                onClick={() => props.setSort('price_l')}
            >
                По цене (по убыванию)
            </Menu.Item>

            <Menu.Item
                active={props.filter === 'price_h'}
                onClick={() => props.setSort('price_h')}
            >
                По цене (по возрастанию)
            </Menu.Item>
            <Menu.Item
                active={props.filter === 'author'}
                onClick={() => props.setSort('author')}
            >
                По автору
            </Menu.Item>
        </Menu>
    );
};

export default Sidebar;