import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (e) => {
    e.preventDefault()

    if(checkDupe(persons, newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const newNameObj = {
      name: newName
    }
    //better than concat?
    console.log("obj is", newNameObj);
    setPersons([...persons, newNameObj])
    setNewName('')
    console.log(persons);
  }
  const handleNameChange = (e) => {
    e.preventDefault()
    console.log("namechange", e.target.value);
    setNewName(e.target.value)
  }
  const checkDupe = (arr, newName) => arr.find( fullname => fullname.name === newName)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input
          onChange={handleNameChange}
          value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(
        person => <div> {person.name} </div>
      )}
    </div>
  )
}

export default App