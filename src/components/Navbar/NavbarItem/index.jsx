import React, { useState } from 'react';
import './styles.scss';

function Item(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        const currentTarget = event.currentTarget;
        const activeItem = document.querySelector('.item-wrapper.active');
        if (activeItem === currentTarget) {
            activeItem.classList.remove('active');
            setIsActive(false);
        } else {
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            currentTarget.classList.add('active');
            setIsActive(true);
        }
    };
    return (
        <div className={`item-wrapper ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <p>{props.title}</p>
            <div className='bottom-border'>
                <div className='center'></div>
            </div>
        </div>
    );
}

export default Item;