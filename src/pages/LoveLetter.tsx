import React from 'react';
import { HomeIcon, CreditCardIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoveLetter.css';

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="navigation-icons">
        <HomeIcon 
          className="nav-icon"
          onClick={() => navigate('/')}
        />
        <CreditCardIcon 
          className="nav-icon"
          onClick={() => navigate('/pokemon-card')}
        />
      </div>
      <div className="letter-content">
        <h1 className="letter-title">To my soon to be wife Sonia,</h1>
        <div className="letter-body">
          <p>As I write this letter, my heart overflows with love and memories of joy as I reminisce of our fondest memories. Every moment we share together fills my world with joy and meaning that I never knew was possible before you came into my life.</p>
          
          <p>Your smile brightens even my darkest days, and your laugh lights up every room. The way you understand me, support my dreams, and stand by my side makes me fall in love with you more and more each day.</p>
          
          <p>This Valentine's Day, I want you to know that you're not just my girlfriend – you're my best friend, my confidante, and my partner in life. The love we share is my most treasured gift, and I promise to cherish and nurture it every single day.</p>
          
          <p>I'm the luckiest person alive to call you mine. Without a doubt, I would like to choose you to be my Valentine, for this year and for all of the ones to come.</p>
        </div>
        <div className="letter-closing">
          <p>Forever Yours,</p>
          <p>Tarif</p>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;