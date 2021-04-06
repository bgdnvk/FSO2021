import React from 'react'

const InputForm = ({text, handleChange, value}) => {
    return(
        <div>
            {text} <input
            onChange={handleChange}
            value={value}
            >
            </input>
        </div>
    )
}
export default InputForm