import { useState} from "react";

const Header = props => <h1>{props.text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let average = (good - bad) / total
  let positive = good / total * 100

  if (total > 0) {
    return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
      
    </div>
  )
  } else {
    return (
      <p>No feedback was given</p>
    )
  }
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={() => {setGood(good + 1)}} text="good" />
      <Button onClick={() => {setNeutral(neutral + 1)}} text="neutral" />
      <Button onClick={() => {setBad(bad + 1)}} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App