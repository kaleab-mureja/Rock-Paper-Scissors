import React, { useState, useEffect } from 'react';
import "./body.css";
import Triangle from "./img/Triangle.svg";
import Paper from "./img/Paper.svg";
import Rock from "./img/Rock.svg";
import Scissor from "./img/Scissors.svg";

const Body = ({currentState,setCurrentState,result,setResult}) => {

  const [readyToPlay, setReadyToPlay] = useState(() => (true));

  const handleMove = (newUserMove) => {

    setCurrentState(prevState => ({
      ...prevState,
      userMove: newUserMove
    }));

    const possibleEvent = ['paper', 'scissor', 'rock'];
    const randomMove = Math.floor(Math.random() * 3);
    const randomEvent = possibleEvent[randomMove];
    setCurrentState(prevState => ({
      ...prevState,
      computerMove: randomEvent,
      trialNum: currentState.trialNum++
    }));
  };
  useEffect(() => {
    if (currentState.userMove !== '' && currentState.computerMove !== ''){
      setReadyToPlay (currentCondition => !currentCondition);
      console.log( `Trial number: ${currentState.trialNum}`)
      winnerStatus();
    }
  },[currentState.trialNum])

  const winnerStatus = () => {

    if (currentState.userMove === currentState.computerMove) {
      setResult({
        ...result,
        userStat: `It's a Tie`
      });
      
    } else if (
      (currentState.userMove === 'paper' && currentState.computerMove === 'rock') ||
      (currentState.userMove === 'scissor' && currentState.computerMove === 'paper') ||
      (currentState.userMove === 'rock' && currentState.computerMove === 'scissor')
    ) {
      setResult(prevResult => ({
        ...prevResult,
        userStat: 'You Win',
        userScore: prevResult.userScore + 1
      }));
    } else {
      setResult(prevResult => ({
        ...prevResult,
        userStat: 'You Lost',
        computerScore: prevResult.computerScore + 1,
        userScore: prevResult.userScore
      }));
    }
  };

  const userSelectedButton = () => {
    if (currentState.userMove === 'rock') {
      return (
        <span>
          <img className='selected-rock yourButton' src={Rock} alt="rock" />
        </span>
      );
    } else if (currentState.userMove === 'paper') {
      return (
        <span>
          <img className="selected-paper yourButton" src={Paper} alt="paper" />
        </span>
      );
    } else {
      return (
        <span>
          <img className="selected-scissor yourButton" src={Scissor} alt="scissor" />
        </span>
      );
    }
  };

  const computerSelectedButton = () => {
    if (currentState.computerMove === 'rock') {
      return (
        <span>
          <img className='selected-rock homeButton' src={Rock} alt="rock" />
        </span>
      );
    } else if (currentState.computerMove === 'paper') {
      return (
        <span>
          <img className="selected-paper homeButton " src={Paper} alt="paper" />
        </span>
      );
    } else {
      return (
        <span>
          <img className="selected-scissor homeButton" src={Scissor} alt="scissor" />
        </span>
      );
    }
  };

  const playAgain = () => {
    setReadyToPlay(currentCondition => !currentCondition);
  };

  const resetGame = () => {
    setCurrentState((prevState) => ({
      ...prevState,
      userMove: '',
      computerMove: '',
      trialNum: 0
    }));

    setResult((prevResult) => ({
      ...prevResult,
      userStat: '',
      computerScore: 0,
      userScore: 0
    }));
  };

  const PhaseOne = () => {
    return (
      <span className="phaseOne-container">
        <img
          className="buttons-triangle"
          src={Triangle}
          alt="triangle image that has three buttons at the corner"
        />
        <button className="paper-button set" onClick={() => { handleMove('paper') }}>
          <img className="paper-btn btn" src={Paper} alt="rock-button" />
        </button>
        <button className="scissor-button set" onClick={() => { handleMove('scissor') }}>
          <img className="scissor-btn btn" src={Scissor} alt="rock-button" />
        </button>
        <button className="rock-button set" onClick={() => { handleMove('rock') }}>
          <img className="rock-btn btn" src={Rock} alt="rock-button" />
        </button>
        <button className='reset-button' onClick={(e) => { e.stopPropagation(); resetGame() }}>RESET</button>
      </span>
    )
  }

  const PhaseTwo = () => {
    return (
      <span className='phaseTwo-container'>
        <span>
          <h1 className='youPicked'>You Picked</h1>
          {userSelectedButton()}
          <h1 className='game-result'>{result.userStat}</h1>
          <button className='play-button' onClick={(e) => { e.stopPropagation(); playAgain() }}>Play Again</button>
          <h1 className='homePicked'>The Home Picked</h1>
          {computerSelectedButton()}
        </span>
      </span>
    )
  }

  return (
    <span className='body-container'>
      {readyToPlay ? <PhaseOne/> : <PhaseTwo/>}
    </span>
  );
};

export default Body;
