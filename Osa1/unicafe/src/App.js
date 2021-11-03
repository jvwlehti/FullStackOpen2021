import React, { useState } from 'react'


const Otsikko = ({ otsikko }) => {
  return (
    <h1>
      {otsikko}
    </h1>)
}

const Nappi = ({ handleClick, teksti }) => {
  return (
    <button onClick={handleClick}>
      {teksti}
    </button>
  )
}

const Statistics = ({ pos, neg, neut, all, summa }) => {
  let posit = ((pos / all) * 100)
  let ka = Math.round((summa / all) * 100) / 100
  let positR = Math.round(posit* 100) /100

  if (pos === 0 & summa === 0) {
    return (
      <div>
        Palautetta ei ole annettu/No feedback given
      </div>
    )
  }
  return (
    <table>
      <thead>
      <Tilanne teksti='Good' tulos={pos} all={all} merkki='' />
      <Tilanne teksti='Neutral' tulos={neut} all={all} merkki='' />
      <Tilanne teksti='Bad' tulos={neg} all={all} merkki='' />
      <Tilanne teksti='All' tulos={all} all={all} merkki='' />
      <Tilanne teksti='average' tulos={ka} merkki='' />
      <Tilanne teksti='Positive' tulos={positR} merkki='%' />
      </thead>
    </table>

  )
}

const Tilanne = ({ teksti, tulos, all, merkki }) => {
  if (all === 0) {
    return (<div></div>)
  }
  return (
    <tr>
      <td>{teksti}</td><td> {tulos}</td><td>{merkki}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGood = () => {
    setSum(sum + 1)
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setSum(sum - 1)
    setAll(all + 1)
    setBad(bad + 1)
  }


  return (
    <div>
      <Otsikko otsikko='Anna palautetta / Give feedback' />
      <Nappi handleClick={handleGood} teksti='Hyvä/Good' />
      <Nappi handleClick={handleNeutral} teksti='Neutraali/Neutral' />
      <Nappi handleClick={handleBad} teksti='Huono/Bad' />
      <Otsikko otsikko='Tilastot/Statistics' />
      <Statistics summa={sum} all={all} pos={good} neg={bad} neut={neutral} />
    </div>
  )
}

export default App
