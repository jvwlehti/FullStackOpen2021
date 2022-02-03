import React, { useState, useEffect } from 'react'
import Person from './Components/Person'
import filterPersons from './Components/Filter'
import Filter from './Components/FilterForm'
import personsService from './services/persons'
import Notification from './Components/Alert'
import ErrorNotification from './Components/Error'
import PersonAdd from './Components/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [effectMessage, setEffectMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


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

    let henkl = persons.find(person => person.name === newName)
    if (persons.includes(henkl)) {
      const result = window.confirm(`${newName} is already added to 
     phonebook, replace the old number with a new one?`)

      if (result === true) {
        let id = henkl.id
        const changeNum = { ...henkl, number: newNum }

        personsService
          .update(id, changeNum)
          .then(response => {
            setPersons(persons.map(person => person.id !== id ? person : response))
            setNewName('')
            setNewNum('')
            setEffectMessage(`The old number of ${newName} changed`)
            setTimeout(() => {
              setEffectMessage(null)
            }, 3000)
          })
        .catch(error => {
          setErrorMessage(`${newName} was already deleted from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
      }
    }
    else {
      personsService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setEffectMessage(`${newName} Added`)
          setTimeout(() => {
            setEffectMessage(null)
          }, 3000)
        })
        .catch(err => {
          setErrorMessage(err.response.data.error.toString())
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
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
          setEffectMessage(`${person.name} deleted`)
          setTimeout(() => {
            setEffectMessage(null)
          }, 3000)
    }

  }


  const personsToShow = filterPersons(persons, search)


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={effectMessage} />
      <ErrorNotification message={errorMessage}/>
      <Filter text={search} action={handleSearchChange} />
      <h2>add a new</h2>
      <PersonAdd submit={addPerson} name={newName} nameChange={handleNameChange} num={newNum} numChange={handleNumChange}/>
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