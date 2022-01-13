import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  //hakee palvelimelta valtiot
  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(resoponse => {
        setCountries(resoponse.data)
      })
  }

  useEffect(hook, [])

 //käsittelee hakukentän
  const handlerSearch = (event) => {
    setSearch(event.target.value)
  }

  

  return (
    <div>
      <Form text={search} action={handlerSearch}/>
      <Countries count={countries} search={search}/>
    </div>


  )
}

export default App