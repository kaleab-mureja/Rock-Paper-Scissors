import './header.css'
import Logo from './img/Logo.svg'

const Header = ({result}) => {
  return (
    <span className="header">
      <div>
        <img className="logo"  src={Logo} alt='logo'/>
      </div>
      <div className="score">
        <p className='score-text'>The Home</p>
        <p className="value computer-value">{result.computerScore}</p>
      </div>
      <div className="score ">
        <p className='score-text'>Your Score</p>
        <p className="value player-value">{result.userScore}</p>
      </div>  
    </span>
  );
};

export default Header;
