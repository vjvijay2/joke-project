import React, { useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { fetchjoke } from "./jokeslice";



function App() {
  const [category, setcategory] = useState();
  const joke=useSelector(function(state){
    return state.joke.joke
  })

  const dispatch=useDispatch()


  function handlechangecategory(evt) {
    setcategory(evt.target.value)
  }

function handlefetch(){
dispatch(fetchjoke(category))
}



  return (
    <div>
      <input onChange={handlechangecategory}></input>
      <button onClick={handlefetch} >Get Jokes</button>
      <h1>{joke}</h1>
    </div>
  )
}

export default App;
