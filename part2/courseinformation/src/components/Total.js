import React from 'react'

const Total = ({course}) => {
    const parts = course.parts
    const sumParts = parts.reduce((acc, part) => {
        return acc + part.exercises
    }, 0)
    console.log(sumParts);

    return(
        <div>
            <b>total of {sumParts} exercises</b>
        </div>
    )
}

export default Total