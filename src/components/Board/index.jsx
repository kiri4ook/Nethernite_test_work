import React from 'react';
import './styles.scss';
import Card from '../Card/index.jsx';
import crystal_1 from '../../images/crystal_1.png';
import crystal_2 from '../../images/crystal_2.png';
import crystal_3 from '../../images/crystal_3.png';
import crystal_4 from '../../images/crystal_4.png';
import crystal_5 from '../../images/crystal_5.png';
import crystal_6 from '../../images/crystal_6.png';
import crystal_7 from '../../images/crystal_7.png';
import coins_1 from '../../images/coins_1.png';
import coins_2 from '../../images/coins_2.png';
import coins_3 from '../../images/coins_3.png';
import coins_4 from '../../images/coins_4.png';
import coins_5 from '../../images/coins_5.png';
import coins_6 from '../../images/coins_6.png';

function Board(props) {
    return (
        <div className="board-wrapper">
            <div className='navbar'></div>
            <div className='board-header'>{props.title}</div>
            {props.crystals && <div className='board'>
                <Card count={100} value={crystal_1} discount='block'></Card>
                <Card count={500} value={crystal_2} discount='block'></Card>
                <Card count={1000} value={crystal_3} discount='block'></Card>
                <Card count={1500} value={crystal_4} discount='block'></Card>
                <Card count={100} value={crystal_5} discount='block'></Card>
                <Card count={500} value={crystal_6} discount='block'></Card>
                <Card count={1000} value={crystal_7} discount='block'></Card>
            </div>}
            {props.coins && <div className='board'>
                <Card count={1000} value={coins_1} discount='none'></Card>
                <Card count={5000} value={coins_2} discount='none'></Card>
                <Card count={10000} value={coins_3} discount='none'></Card>
                <Card count={1000} value={coins_4} discount='none'></Card>
                <Card count={1000} value={coins_5} discount='none'></Card>
                <Card count={5000} value={coins_6} discount='none'></Card>
            </div>}
        </div>
    );
}

export default Board;