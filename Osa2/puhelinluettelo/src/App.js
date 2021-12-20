import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Components/Person'
import filterPersons from './Components/Filter'
import Filter from './Components/FilterForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')


  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }  

  const addPerson = (event) => {
    event.preventDefault()

    const noteObject = {
      name: newName,
      number: newNum
    }

    let nimi = persons.find(person => person.name === newName)
    if (persons.includes(nimi)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(noteObject))
    }
    setNewName('')
    setNewNum('')
  }

  const personsToShow = filterPersons(persons, search)


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={search} action={handleSearchChange}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number:
          <input
            value={newNum}
            onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {personsToShow.map(person =>
          <Person key={person.name} person={person} />
          )}
      </div>
    </div>
  )

}

export default App