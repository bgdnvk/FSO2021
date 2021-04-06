import React from 'react'
import getFilteredPeople from '../utils/getFilteredPeople'

const DisplayData = ({arr, query}) => {
    const arrCopy = getFilteredPeople(arr, query)
    console.log("arr copy is",arrCopy);
    return(
      <div>
        {arr.map( entry => <div> {entry.name} - {entry.number}</div>)}
      </div>
    )
}
export default DisplayData