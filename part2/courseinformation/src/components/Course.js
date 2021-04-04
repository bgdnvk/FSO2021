import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {
    return (
      <div>
       <Header course={course.name}></Header>
       <Content course={course}></Content>
       <Total course={course}></Total>
      </div>
    )
  }

export default Course