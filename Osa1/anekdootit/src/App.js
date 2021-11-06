import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Otsikko = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const Best = ({points, anecdotes}) => {

  let paras = (Math.max(...points))
  let indeksi = 0
  for(let i = 0; i < points.length; i++){
    if (points[i] === paras){
      indeksi = i
    }
  }

  let anec = anecdotes[indeksi]
  console.log('paras', paras)
  console.log(indeksi)

  if (paras === 0) {
    return(
      <div>No votes yet</div>
    )
  }

  return (
    <div>
      <p>{anec}</p>
      <p> has {paras} votes</p>
    </div>
    
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  const nextAnec = () => {
    let valittu = Math.floor(Math.random() * (anecdotes.length))
    setSelected(valittu)
    console.log([valittu])
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

  }

  return (
    <div>
      <Otsikko text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes</p>
      <Button handleClick={vote} text='vote' />
      <Button handleClick={nextAnec} text='next anecdote' />
      <Otsikko text='Most valuable anecdote' />
      <Best points = {points} anecdotes = {anecdotes} />
    </div>
  )
}

export default App