import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WilliamLanding.scss';
import InstagramIcon from '../../../assets/social/instagram-brands-dark-purple.svg';

const InstagramButton = ({ link, text }) => (
  <a href={link} target="_blank" rel="noreferrer" className="no-link-style">
    <div className="button">
      <img src={InstagramIcon} alt="Instagram Icon" className="button-icon" />
      <span className="button-text">{text}</span>
    </div>
  </a>
);

InstagramButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const WilliamLanding = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-09-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return (
    <div className="landing-page">
      <div className="container">
        <div className="title-section">
          <h1 className="title-text">COMING SOON!</h1>
          <p className="subtitle">
            Hey F!rosh! Our website is currently under construction. Check back soon!
          </p>
          <div className="countdown">
            {timerComponents.length ? timerComponents : <span>Time is up!</span>}
          </div>
        </div>
        <div className="info-section">
          <div className="button-container">
            <InstagramButton
              link="https://www.instagram.com/froshweek/"
              text="Follow @froshweek for updates"
            />
            <InstagramButton
              link="https://www.instagram.com/froshnomore/"
              text="Follow @froshnomore to get involved"
            />
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-text">Made with 💜 by the F!rosh Week 2T4 Tech Team</h2>
        </div>
      </div>
    </div>
  );
};

export { WilliamLanding };
