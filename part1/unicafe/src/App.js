import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Feedback = ({good, setGood, bad,
   setBad, neutral, setNeutral}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => addClicked(good, setGood)}></Button>
      <Button text={"neutral"} handleClick={() => addClicked(neutral, setNeutral)}></Button>
      <Button text={"bad"} handleClick={() => addClicked(bad, setBad)}></Button>
      
    </div>
  )
}

const Stat = ({stat, text}) => {
  return(
    <div>
      <p>{text} {stat}</p>
    </div>
  )
}

const Statistics = ({good, bad, neutral}) => {
  calculations.good = good;
  calculations.neutral = neutral;
  calculations.bad = bad;
  return(
    <div>
      <Stat 
      text={"good"} stat={good}
      ></Stat>
      <Stat
      text={"neutral"} stat={neutral}
      ></Stat>
      <Stat
      text={"bad"} stat={bad}
      ></Stat>
      <div>
        all {calculations.sumTotal()}
      </div>
      <div>
        average {toFixedDec(calculations.calcAverage())}
      </div>
      <div>
        positive {toFixedDec(calculations.calcPositive())} %
      </div>
    </div>
  )
}

const addClicked = (state, setState) => setState(state +1);
const toFixedDec = (num) => Number.parseFloat(num).toFixed(2);

const calculations = {
  good: 0, neutral: 0, bad: 0,
  sumTotal(){ return this.good+this.neutral+this.bad },
  calcAverage(){
    return (this.good + this.bad*-1)/(this.good+this.neutral+this.bad) || 0},
  calcPositive(){return (this.good*(100/(this.good+this.neutral+this.bad))) || 0}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback
      good={good} setGood={setGood}
      neutral={neutral} setNeutral={setNeutral}
      bad={bad} setBad={setBad}
      ></Feedback>

      <Statistics
      good={good} neutral={neutral} bad={bad}
      ></Statistics>


    </div>
  )
}

export default App