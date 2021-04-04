import React from 'react'
import Part from './Part'

const Content = ({course}) => {
    const parts = course.parts
    return (
        <div>
          {
            parts.map(part =>
                <Part name={part.name} exercise={part.exercises}></Part>)
            }
        </div>
    )
}

export default Content