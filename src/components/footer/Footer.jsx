import React, { useState } from 'react'; // Import React and useState
import './footer.css';
import Rules from './img/Rules.svg';
import Close from './img/Close.png';

const Footer = () => {
  const [showRule, setShowRule] = useState(false); // State to track whether to show the rule

  const displayRule = () => {
    setShowRule(true); // Set the state to true to display the rule
  }
  const closeRuleCard = () => {
    setShowRule(false)
  }

  return (
    <span className='rules'>
      <button onClick={displayRule} className='footer-button'>RULES</button>
      {showRule && <><img className='display-rule' src={Rules} alt="Rules" /> 
      <button className='remove-button'><img onClick={closeRuleCard} className='close-icon' src={Close} /></button></>}
    </span> 
  );
}

export default Footer;
