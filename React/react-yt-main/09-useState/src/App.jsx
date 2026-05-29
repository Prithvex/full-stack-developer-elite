// for the css refer index.css
import React, { useState } from 'react'

const App = () => {

  // Counter State
  const [num, setNum] = useState(0)

  // User State
  const [user, setUser] = useState({
    user: "Prithvii",
    age: "20"
  })

  // Array State
  const [arr, setarr] = useState([10, 20, 30, 40, 50])

  // // Add item in array
  // const btnclicked = () => {
  //   const newarr = [...arr]

  //   newarr.push(99)

  //   setarr(newarr)
  // }

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  function jump5Num() {
    setNum(num + 5)
  }

  function jump10Num() {
    setNum(num + 10)
  }

  function erase() {
    setNum(0)
  }

  function knowuser() {
    setNum(user.user)
  }

  function knowuserage() {
    setNum(user.age)
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={increaseNum}>increase</button>

      <button onClick={decreaseNum}>decrease</button>

      <button onClick={jump5Num}>Increase by 5</button>

      <button onClick={jump10Num}>Increase by 10</button>

      <button onClick={erase}>erase</button>

      <button onClick={knowuser}>User</button>

      <button onClick={knowuserage}>UserAge</button>

      {/* <button onClick={btnclicked}>Add 99</button> */}
      {/* <h2>{arr.join(" , ")}</h2> */}


      
    </div>
  )
}

export default App