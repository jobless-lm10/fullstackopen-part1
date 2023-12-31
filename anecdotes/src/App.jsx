import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  const votes = {};
  for (let i = 0; i < anecdotes.length; i++) {
    votes[i] = 0;
  }

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(votes);
  const [topRated, setTopRated] = useState(0);

  const voteHandler = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 });
    console.log(points[selected]);
    console.log(points[topRated]);
    if (points[selected] + 1 > points[topRated]) {
      setTopRated(selected);
    }
  };

  return <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={voteHandler}>Vote</button>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next Anecdote</button>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[topRated]}</p>
    </div>;
};

export default App;
