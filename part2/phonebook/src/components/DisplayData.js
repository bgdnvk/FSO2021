import React from 'react'
import getFilteredPeople from '../utils/getFilteredPeople'

const DisplayData = ({arr, query}) => {
    const arrCopy = getFilteredPeople(arr, query)
    return(
      <div>
        {arrCopy.map( entry => <div> {entry.name} - {entry.number}</div>)}
      </div>
    )
}
export default DisplayData