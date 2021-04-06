import React from 'react'
import Inputform from './InputForm'
const Form = ({hooks, handleChange, addNote}) => {
    //console.log(hooks.newName);
    return(
        <form onSubmit={addNote}>
        <Inputform
        text= {"filter shows with "}
        handleChange={(e) => handleChange(e, hooks.setQuery)}
        value={hooks.query}
        ></Inputform>

        <Inputform
        text = {"name: "}
        handleChange={(e) => handleChange(e, hooks.setNewName)}
        value={hooks.newName}
        ></Inputform>

        <Inputform
        text={"number: "}
        handleChange={(e) => handleChange(e, hooks.setNewNumber)}
        value={hooks.newNumber}
        ></Inputform>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default Form