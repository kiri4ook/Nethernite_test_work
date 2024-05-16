import React from 'react';
import './styles.scss';
import arrowIcon from '../../images/arrowIcon.png';
import homeIcon from '../../images/homeIcon.png';
import coinsIcon from '../../images/coinsIcon.png';
import crystalsIcon from '../../images/crystalsIcon.png';
import headerBg1 from '../../images/header-bg1.png';
import headerBg2 from '../../images/header-btn-bg2.png';
import plusIcon from '../../images/plusIcon.png';
import headerBtnBg1 from '../../images/header-btn-bg1.png';

function Header() {
    const headerStyle = {
        backgroundImage: `url(${headerBg1}), linear-gradient(to bottom, rgba(0, 0, 0), rgb(44, 44, 54))`,
        backgroundPosition: 'top',
        backgroundColor: '#16151f',
    };

    const backBtnStyle = {
        background: `url(${headerBtnBg1})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    const plusIconStyle = {
        background: `url(${plusIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    const homeBtnStyle = {
        background: `url(${headerBg2})`,
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="header-wrapper" style={headerStyle}>
           <button className="back-btn" style={backBtnStyle}>
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
                        <div className='plus-icon' style={plusIconStyle}></div>
                    </div>
                </div>
                <div className='crystals'>
                    <img src={crystalsIcon} alt="" />
                    <div className='counter'>
                        <div className='count'>
                            <p>1 254</p>
                            <p>Crystals</p>
                        </div>
                        <div className='plus-icon' style={plusIconStyle}>
                            <div className='icon'></div>
                        </div>
                    </div>
                </div>
           </div>
           <button className="home-btn" style={homeBtnStyle}>
                <img src={homeIcon} alt="" />
                <p>HOME</p>
            </button>
        </div>
    );
}

export default Header;