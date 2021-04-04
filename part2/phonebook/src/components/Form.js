import React from 'react'
const Form = ({hooks, handleChange, addNote}) => {
    console.log(hooks.newName);
    return(
        <form onSubmit={addNote}>
        <div>
          name: <input
          onChange={ (e) => handleChange(e, hooks.setNewName)}
          value={hooks.newName} />
        </div>
        <div>
          number: <input
          onChange = { (e) => {handleChange(e, hooks.setNewNumber)}}
          value = {hooks.newNumber}
          >
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default Form