import React from 'react';
import Part from "./Part"
import Total from "./Total"
const Content = ({parts}) => {
  const sum = parts.reduce((acum, curr) => acum += curr['exercises'], 0)
  const Parts = parts.map(part => 
  <Part 
    key={part.id}
    name={part.name} 
    exercises={part.exercises}
  />
  )
  return (
    <>
      {Parts}
      <Total total_sum={sum}/>
    </>
  )

}

export default Content;