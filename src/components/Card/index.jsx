import React from 'react';
import './styles.scss';
import dollar from '../../images/dollar.png';
import discount_frame from '../../images/discount-frame.png';

function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="frame">
                <img className="discount-frame" src={discount_frame} style={{ display: props.discount }} alt=''/>
            </div> 
            <div className='card-items'>
                <img className='value' src={props.value} alt="" />
                <div className='count'>
                    <p>x{props.count}</p>
                    <p>Handful of Coins</p>
                </div>
                <button className='card-btn'>
                    <p>Купить </p>
                    <img src={dollar} alt="" />
                    <p> 10</p>
                </button>
            </div>
        </div>
    );
}

export default Card;