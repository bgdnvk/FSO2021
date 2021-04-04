import React, { useState } from 'react'

const DisplayData = ({arr}) => {
  return(
    <div>
      {arr.map( entry => <div> {entry.name} - {entry.number}</div>)}
    </div>
  )
  

}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addNote = (e) => {
    e.preventDefault()

    if(checkDupe(persons, newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
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

 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input
          onChange={ (e) => handleChange(e, setNewName)}
          value={newName} />
        </div>
        <div>
          number: <input
          onChange = { (e) => {handleChange(e, setNewNumber)}}
          value = {newNumber}
          >
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <DisplayData arr={persons}></DisplayData>

    </div>
  )
}

export default App