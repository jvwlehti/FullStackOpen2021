import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(resoponse => {
        setCountries(resoponse.data)
      })
  }

  useEffect(hook, [])


  const handlerSearch = (event) => {
    setSearch(event.target.value)
  }

  

  const filterCountry = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

  return (
    <div>
      <Form text={search} action={handlerSearch}/>
      <Country/>
    </div>


  )
}





export default App