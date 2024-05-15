import React from 'react';
import './styles.scss';
import monster_1 from '../../images/monster-bg-1.png';
import monster_2 from '../../images/monster-bg-2.png';
import gold_1 from '../../images/gold-bg-1.png';
import gold_2 from '../../images/gold-bg-2.png';
import Board from '../Board/index.jsx';
import Navbar from '../Navbar/index.jsx';

function Main() {
    return (
        <div className="main-wrapper">
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