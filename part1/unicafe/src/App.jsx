import { useState } from "react";

//button components
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const clickGood = () => {
    props.setGood(props.good + 1);
  };

  const clickNeutral = () => {
    props.setNeutral(props.neutral + 1);
  };

  const clickBad = () => {
    props.setBad(props.bad + 1);
  };

  //check if there is no button clicked
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <div>
        <Button handleClick={clickGood} text="good" />
        <Button handleClick={clickNeutral} text="neutral" />
        <Button handleClick={clickBad} text="bad" />
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const totalGood = props.good * 1;
  const totalBad = props.bad * -1;
  const totalNeutral = props.neutral * 0;
  const all = props.good + props.neutral + props.bad;
  const average = (totalBad + totalGood + totalNeutral) / all;
  const positive = (totalGood / all) * 100;

  return (
    <div>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={totalGood} />
          <StatisticLine text="neutral" value={totalNeutral} />
          <StatisticLine text="bad" value={totalBad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  );
};

// statistics line
const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

// app component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Statistics
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
    </>
  );
};
export default App;
