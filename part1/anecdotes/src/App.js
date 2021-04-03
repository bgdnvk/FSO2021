import React, { useState } from 'react'


const Button = ({text, handleClick}) => {
  return(
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const Anecdote = ({title, text}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  //array of points for anecdotes
  const points = [...Array(6).fill(0)]
   
  const [selected, setSelected] = useState(0)
  const [getPoints, setPoints] = useState(points)
  console.log("points", getPoints);

  const randomNum = () => Math.floor(Math.random() * anecdotes.length)
  const anecdoteClick = () => setSelected(randomNum())
  const pointsClick = () => {
    //not altering the state
    const copyPoints = [...getPoints] 
    copyPoints[selected] = copyPoints[selected]+=1
    setPoints(copyPoints)
  }
  const getMostVoted = () => getPoints.indexOf(Math.max(...getPoints))

  return (
    <div>
      <Anecdote
      title={"Anecdote of the day"}
      text={anecdotes[selected]}
      ></Anecdote>
      <Button text={"next anecdote"}
      handleClick={anecdoteClick}
      ></Button>
      <Button text={"vote"}
      handleClick={pointsClick}
      ></Button>

      <Anecdote
      title={"Anecdote with the most votes"}
      text={anecdotes[getMostVoted()]}
      ></Anecdote>
    </div>
  )
}

export default App