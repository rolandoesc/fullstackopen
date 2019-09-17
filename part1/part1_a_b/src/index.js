import React, {useState} from 'react'
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
    <Part part={props.parts[0]['name']} excersice={props.parts[0]['exercises']}/>
    <Part part={props.parts[1]['name']} excersice={props.parts[1]['exercises']}/>
    <Part part={props.parts[2]['name']} excersice={props.parts[2]['exercises']}/>
  </>
)
const Total = (props) => (
  <>
    <p>
      Number of exercises {
        props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']
      }
    </p>
  </>
)
const App = (props) => {
  const [counter, setCounter] = useState(0)
  const setToValue = (value) => setCounter(value)
  const Display = ({counter}) => <div>{counter}</div>
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}> { text } </button>
  )
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course['name']}/>
      <Content 
        parts={course['parts']}
      />
      <Total 
        parts={course['parts']}
      />
      <Display counter={counter}/>
      <Button onClick={() => setToValue(counter + 1)} text='plus'/>
      <Button onClick={() => setToValue(counter - 1)} text='minus'/>
      <Button onClick={() => setToValue(0)} text='zero'/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))