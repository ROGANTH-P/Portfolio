import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [count,SetCount]=useState(()=>
  {
         return 4;
  });
  function decreament()
  {
    SetCount(prevCount=>prevCount-1)
  }
  function increament()
  {
    SetCount(count+1)
  }
  return (
    <>
      <button onClick={decreament}>-</button>
      <span>{count}</span>
      <button onClick={increament}>+</button>
    </>
  );
}

export default App;
