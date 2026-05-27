// for the css refer index.css
import React, { useState } from 'react'

const App = () => {

  // Use State and their shit --> usestatesnipit 
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }
  function jump10Num(){
    setNum(num+10)
  }
  function erase(){
    setNum(0)
  }

  //console.log turant chalta hain but UI ko thoda wait lagta hain 

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increas by 5</button>
      <button onClick={jump10Num}>Increas by 10</button>
      <button onClick={erase}>erase</button>
      
    </div>
  )
}

export default App