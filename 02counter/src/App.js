
import './App.css';
import { useState } from "react";

function App() {

  const [counter, increase] = useState(0)

  const addValue = ()=>{
    increase(counter+1)
  }

  const subsValue = ()=>{
    increase(counter-1)
  }

  return (
    <>
      <h1>React with abhayanand {counter}</h1>
      <h2>counter: {counter}</h2>
      <button
        onClick = {addValue}
      >add value</button>{' '}

      <button
        onClick={subsValue}
      >subs value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
