import React from 'react';
import './styles.scss';
import Item from './NavbarItem/index.jsx';

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <Item title='Монстр Боксы'></Item>
            <Item title='Банк'></Item>
            <Item title='Наборы'></Item>
            <Item title='Спец предложения'></Item>
            <Item title='Промо коды'></Item>
        </div>
    );
}

export default Navbar;