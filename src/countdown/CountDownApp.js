import React from 'react';
import Countdown from 'react-countdown';
import './countdown.css';

import starImage from './images/bg-stars.svg';
import mountainImage from './images/pattern-hills.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';

function CountDownApp() {
  const Completionist = () => <span>Srecna Nova Godina!</span>;

  return (
    <div
      style={{ backgroundImage: `url("${starImage}")` }}
      className="container"
    >
      <h2 className="title">We are launching soon !</h2>
      <Countdown className="date" date={Date.now() + 1209600000}>
        <Completionist />
      </Countdown>
      <div className='date-info'><span>days</span> <span>hours</span> <span>minutes</span> <span>seconds</span> </div>

      <div
        className="img"
        style={{ backgroundImage: `url("${mountainImage}")` }}
      >
        <div className='images-container'>
          <img className="icon-images" src={facebook} alt="" />
          <img className="icon-images" src={instagram} alt="" />
          <img className="icon-images" src={pinterest} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CountDownApp;
