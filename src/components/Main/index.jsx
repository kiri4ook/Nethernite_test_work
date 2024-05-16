import React from 'react';
import './styles.scss';
import monster_1 from '../../images/monster-bg-1.png';
import monster_2 from '../../images/monster-bg-2.png';
import main_bg from '../../images/main-bg.png';
import gold_1 from '../../images/gold-bg-1.png';
import gold_2 from '../../images/gold-bg-2.png';
import Board from '../Board/index.jsx';
import Navbar from '../Navbar/index.jsx';

function Main() {
    const mainStyle = {
        background: `url(${main_bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="main-wrapper" style={mainStyle}>
            <img className='monster_1' src={monster_1} alt="" />
            <img className='monster_2' src={monster_2} alt="" />
            <img className='gold_1' src={gold_1} alt="" />
            <img className='gold_2' src={gold_2} alt="" />
            <Navbar></Navbar>
            <Board title='Кристаллы Незера' crystals='true'></Board>
            <Board title='Монеты Незера' coins='true'></Board>
        </div>
    );
}

export default Main;