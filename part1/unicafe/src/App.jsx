import { useState } from 'react'
import Statistics from './Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad
  }
  const all = good + neutral + bad;
  const average=(good-bad)/all;
  const positives=(good/all) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good+1)}>good</button> &nbsp;
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>&nbsp;
      <button onClick={()=> setBad(bad+1)}>bad</button>&nbsp;
      <br />
      <h2>statistics</h2>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App