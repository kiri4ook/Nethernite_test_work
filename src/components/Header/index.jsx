import React from 'react';
import './styles.scss';
import arrowIcon from '../../images/arrowIcon.png';
import homeIcon from '../../images/homeIcon.png';
import coinsIcon from '../../images/coinsIcon.png';
import crystalsIcon from '../../images/crystalsIcon.png';

function Header() {
    return (
        <div className="header-wrapper">
           <button className="back-btn">
                <img src={arrowIcon} alt="" />
                <p>BACK</p>
            </button>
           <div className="currency">
                <div className='coins'>
                    <img src={coinsIcon} alt="" />
                    <div className='counter'>
                        <div className='count'>
                            <p>100 254</p>
                            <p>Coins</p>
                        </div>
                        <div className='plus-icon'></div>
                    </div>
                </div>
                <div className='crystals'>
                    <img src={crystalsIcon} alt="" />
                    <div className='counter'>
                        <div className='count'>
                            <p>1 254</p>
                            <p>Crystals</p>
                        </div>
                        <div className='plus-icon'>
                            <div className='icon'></div>
                        </div>
                    </div>
                </div>
           </div>
           <button className="home-btn">
                <img src={homeIcon} alt="" />
                <p>HOME</p>
            </button>
        </div>
    );
}

export default Header;