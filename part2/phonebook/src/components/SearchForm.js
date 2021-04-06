import React from 'react'
import Inputform from './InputForm'

const SearchForm = ({hooks, handleChange}) => {
    return(
        <Inputform
        text= {"search phonebook "}
        handleChange={(e) => handleChange(e, hooks.setQuery)}
        value={hooks.query}
        ></Inputform>
    )
}
export default SearchForm