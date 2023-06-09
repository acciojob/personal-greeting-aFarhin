
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("")

  function changeInp(e){
    setName(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}

        <p>Enter your name: </p>
        <input type="text" onChange={changeInp}/>
         
        {name && <p>Hello {name}!</p>}
         
    </div>
  )
}

export default App
