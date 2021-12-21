import React, { useState, useEffect } from 'react'
import Person from './Components/Person'
import filterPersons from './Components/Filter'
import Filter from './Components/FilterForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')


  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

    const newObject = {
      name: newName,
      number: newNum
    }

    let nimi = persons.find(person => person.name === newName)
    if (persons.includes(nimi)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      personsService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })

    }
    setNewName('')
    setNewNum('')
  }

  const toggleDelete = (id) => {
    const person = persons.find(n => n.id === id)
    const result = window.confirm(`Delete ${person.name}`)
    if (result === true) {
      personsService
        .poisto(id)
        .then(
          setPersons(persons.filter(n => n.id !== id)))
    }

  }


  const personsToShow = filterPersons(persons, search)


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={search} action={handleSearchChange} />
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
          <Person
            key={person.id}
            person={person}
            toggleDelete={() => toggleDelete(person.id)}
          />
        )}
      </div>
    </div>
  )

}

export default App