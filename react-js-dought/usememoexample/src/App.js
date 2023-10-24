
import './App.css';
import {useEffect, useMemo, useState} from "react"
import ExpensiveComponent from './ExpensiveComponent';

function App() {

  const [text , setText] = useState("")

  console.log("Componnet re-render")
  return (
    <div className='App'>
      <input onChange={(e) => setText(e.target.value)} placeholder='enter a text'/>
      <ExpensiveComponent />
    </div>
  );
}

export default App;
