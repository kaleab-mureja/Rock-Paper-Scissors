import React, {useState} from "react";
import Header from './components/header/Header'
import Body from "./components/body/Body";
import Footer from './components/footer/Footer';

const App = () => {
  const [result, setResult] = useState(() => ({
    userStat: '',
    computerScore: 0,
    userScore: 0
  }));

  const [currentState, setCurrentState] = useState(() => ({
    userMove: '',
    computerMove: '',
    trialNum: 0
  })); 

  return (
    <span className="container">
      <Header result = {result} />
      <Body currentState = {currentState} setCurrentState = {setCurrentState} result = {result} setResult = {setResult}/>
      <Footer />
    </span>
  );
};

export default App;