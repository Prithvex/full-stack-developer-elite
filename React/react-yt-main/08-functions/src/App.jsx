
import './index.css'
const App = () => {
  function btnClicked(){
    console.log('hello');
  }

  function inputchanging(elem){
    console.log(elem.target.value);
  }

 function scroll(elem) {
  if (elem > 0) {
    console.log("Seedhe Scroll", elem)
  } 
  else if (elem < 0) {
    console.log("Ulta Karo", elem)
  } 
  else {
    console.log("No Scroll", elem)
  }
}
  return (
    <div>
      <button onClick={btnClicked}>Click</button>
      <br />
      <button onDoubleClick={()=>{
        console.log("Chuna na , Chunna na !!")
      }}>Chuu lo</button>
      <br />
      {/* Lets do with the input  */}

      {/* <input onChange={()=>{
        console.log("He Maa MataJi");
      }} type="text" /> */}

        <input onChange={inputchanging} type="text" name="" id="" />

        <div onScroll={scroll}>
          <div className='page1'></div>
          <div className='page2'></div>
          <div className='page3'></div>

        </div>


    </div>


  )
}

export default App