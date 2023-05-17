
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
        <label for="inp">Enter your name: </label>
        <br />
        <br />
        <input id="inp" type="text" onChange={changeInp}></input>
        <br />
        <br />
        <p>{name}</p>
    </div>
  )
}

export default App
