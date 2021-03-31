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

const Statistic = ({stat, text}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>
        {stat}
      </td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  calculations.good = good;
  calculations.neutral = neutral;
  calculations.bad = bad;

  let sumTotal = calculations.sumTotal()
  let calcAverage = toFixedDec(calculations.calcAverage())
  let calcPositive = toFixedDec(calculations.calcPositive())

  if(!good && !bad && !neutral){
    return(
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  }
  return(
    <table>
     <tbody>
      <Statistic 
      text={"good"} stat={good}
      ></Statistic>
      <Statistic
      text={"neutral"} stat={neutral}
      ></Statistic>
      <Statistic
      text={"bad"} stat={bad}
      ></Statistic>

      <Statistic text={"all"} stat={sumTotal}></Statistic>

      <Statistic text="average" stat={calcAverage}></Statistic>

      <Statistic text="positive" stat={calcPositive}></Statistic>
      </tbody>
    </table>
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