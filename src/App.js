import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count,setCount]=useState(0)
  const [text,setText]=useState("")
  

  useEffect (()=> {
    setTimeout(()=>setCount(0),(5000))
  },[])

  useEffect (()=>{
    document.title=text
  },[text])
  useEffect(() => {
    console.log("useEffect called");
  },[count]);

  console.log("Component rendering");

  return (
    <div>
        <button onClick={()=>setCount((count)=>count+1)}>
            I've been Clicked {count} times
        </button>
        <input
          type='text'
          placeholder='type away...'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <DogPics />
    </div>
)};


export default App;
