import React from 'react';
import './styles.scss';
import dollar from '../../images/dollar.png';
import discount_frame from '../../images/discount-frame.png';
import card_bg from '../../images/card-bg.png';
import card_frame from '../../images/card-frame.png';

function Card(props) {
    const cardStyle = {
        backgroundImage: `url(${card_bg}), linear-gradient(to bottom, rgba(8, 1, 21, 0.9) 75%, rgba(8, 1, 21, 0.1) 100%)`,
        backgroundColor: '#080115',
    };

    const frameStyle = {
        backgroundImage: `url(${card_frame})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="card-wrapper" style={cardStyle}>
            <div className="frame" style={frameStyle}>
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