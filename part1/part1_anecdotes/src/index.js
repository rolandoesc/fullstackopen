import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdote }) => {
  return (
    <>
      <div>
        {anecdote}
      </div>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const VotesCount = ({count}) => {
  return (
    <p>
      has {count} vote{count > 1 ? 's' : ''}
    </p>
  )
}

const MostVoted = ({famous_anecdote, most_voted}) => {
  if (!most_voted) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <h3>None of the anecdotes have been voted yet!</h3>
      </>
    )
  }
  else return (
    <>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={famous_anecdote}/>
      <VotesCount count={most_voted}/>
    </>
  )
}

const RandomAnecdote = ({
  anecdote, vote, 
  handleAnecdoteVote, 
  handleRandomAnecdoteClick}) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdote} />
      <VotesCount count={vote} />
      <Button handleClick={handleAnecdoteVote} text="Vote" />
      <Button handleClick={handleRandomAnecdoteClick} text="Next Anecdote" />
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(props.votes)
  const [most_voted, setMostVoted] = useState(0)
  const [famous_anecdote, setFamousAnecdote] = useState(props.anecdotes[selected])
  const handleRandomAnecdoteClick = () => { 
    let random_position = Math.floor(Math.random() * Math.floor(6));
    return setSelected(random_position)
  }
  const handleAnecdoteVote = () => {
    let current_votes = [...vote];
    current_votes[selected] = current_votes[selected] + 1;
    setVote(current_votes)
    return updateMostVoted(current_votes) 
  }
  const updateMostVoted = (current_votes) => {
    let max_voted = current_votes.indexOf(Math.max(...current_votes))
    setMostVoted(current_votes[max_voted]);
    setFamousAnecdote(props.anecdotes[max_voted]);
  }
  return (
    <>
      <RandomAnecdote 
        handleAnecdoteVote={handleAnecdoteVote}
        handleRandomAnecdoteClick={handleRandomAnecdoteClick}
        anecdote={anecdotes[selected]}
        vote={vote[selected]}
      />
      <MostVoted famous_anecdote={famous_anecdote} most_voted={most_voted}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const votes = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0);

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} />,
  document.getElementById('root')
)