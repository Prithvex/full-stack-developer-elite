import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault() //prevent the page from reload, 
    // kuki submit karne pr reload ho jata hain automatic 
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App