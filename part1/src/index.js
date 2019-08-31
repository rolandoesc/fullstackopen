import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)
const Part = (props) => (
  <>
    <p>
      {props.part} {props.excersice}
    </p>
  </>
)
const Content = (props) => (
  <>
    <Part part={props.name} excersice={props.exercises}/>
    <Part part={props.name} excersice={props.exercises}/>
    <Part part={props.name} excersice={props.exercises}/>
  </>
)
const Total = (props) => (
  <>
    <p>
      Number of exercises {
        props.exercises1 + props.exercises2 + props.exercises3
      }
    </p>
  </>
)
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        name={part1['name']} exercises={part1['exercises']}
        name={part2['name']} exercises={part2['exercises']}
        name={part3['name']} exercises={part3['exercises']}
      />
      <Total 
        exercises1={part1['exercises']} 
        exercises2={part2['exercises']} 
        exercises3={part3['exercises']}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))