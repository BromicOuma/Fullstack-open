import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const App = () => {
  const anecdotes = [
    "If it hurts do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time \
    ..The remaining 10 percent of the code accounts for the other 90 percent of the development time",
    "Any fool can write a code that a computer can understand. Good programmers write code that humans can understand",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible \
    ,you are, by definition, not smart enough to debug it",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests \
    when diagnosing patients.",
    "The only way to go fast is to go well",
  ];
  //create an array of size anecdotes filled with zero
  const ca = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(ca);

  // generate random number

  // function to call next anecdote when button is clicked
  const next = () => {
    const position = (Math.floor(Math.random() * 10) + 1) % anecdotes.length;
    setSelected(position);
    return position;
  };

  //function to add the votes on button click
  const vote = () => {
    const ca_copy = [...count];
    ca_copy[selected] += 1;
    setCount(ca_copy);
  };

  //component to render the popular anecdote
  const Popular = (props) => {
    let highest_vote = 0;
    let index;
    count.forEach((i) => {
      if (i > highest_vote) {
        highest_vote = i;
        index = count.indexOf(highest_vote);
      }
    });
    if (highest_vote === 0) {
      return (
        <>
          <p>None</p>
        </>
      );
    }
    return (
      <div>
        <p>{props.anec[index]}</p>
        <p>has {highest_vote} vote</p>;
      </div>
    );
  };

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {count[selected]} votes</p>
      <Button handleClick={vote} text="vote" />
      <Button handleClick={next} text="next anecdote" />
      <h1>Anecdotes with most votes</h1>
      <Popular anec={anecdotes} />
    </div>
  );
};

export default App;
