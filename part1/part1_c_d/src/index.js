import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good,bad,neutral}) => {
  let all = good + bad + neutral;
  let average = ((good - bad) / (good + bad + neutral));
  let positive = `${(good / (good + bad + neutral)) * 100} %`;
  if ((good + bad + neutral) === 0)
    return (
      <>
        <h1>Statistics</h1>
        <h2>No feedback given</h2>
      </>
    )
  else
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="Good" value={good}/>
            <Statistic text="Neutral" value={neutral}/>
            <Statistic text="Bad" value={bad}/>
            <Statistic text="All" value={all}/>
            <Statistic text="Average" value={average}/>
            <Statistic text="Positive" value={positive}/>
          </tbody>
          
        </table>
      </>
    )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleReviewClick = (review) => {
    if (review === 'good')
      setGood(good + 1)
    else if (review === 'bad') 
      setBad(bad + 1)
    else setNeutral(neutral + 1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleReviewClick('good')} text="positive"/>
      <Button handleClick={() => handleReviewClick('neutral')} text="neutral"/>
      <Button handleClick={() => handleReviewClick('bad')} text="negative"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)