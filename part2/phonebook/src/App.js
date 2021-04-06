import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import DisplayData from './components/DisplayData'
import SearchForm from './components/SearchForm'


const App = () => {
  // - data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  // - hooks
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ query, setQuery ] = useState('')

  const hooks = {
    newName, 
    setNewName,
    newNumber,
    setNewNumber,
    query,
    setQuery
  }
  // - hooks

  // -- functions
  const addNote = (e) => {
    e.preventDefault()

    if(checkDupe(persons, newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    const newNameObj = {
      name: newName,
      number: newNumber
    }
    //better than concat?
    console.log("obj is", newNameObj);
    setPersons([...persons, newNameObj])
    setNewName('')
    setNewNumber('')
    console.log(persons);
  }
  const handleChange = (e, setter) => {
    e.preventDefault()
    console.log("handlechange", e.target.value);
    setter(e.target.value)
  }
  const checkDupe = (arr, newName) => arr.find( fullname => fullname.name === newName)
  // -- functions
 
  return (
    <div>
      <Header text={"Phonebook"}></Header>
      <SearchForm
      hooks={hooks} handleChange={handleChange}
      ></SearchForm>
      <Header text={"add new"}></Header>
      <Form hooks={hooks} handleChange={handleChange}
      addNote={addNote}></Form>
      <Header text={"Numbers"}></Header>
      <DisplayData arr={persons} query={query}></DisplayData>
    </div>
  )
}

export default App