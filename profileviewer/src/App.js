import React, {useState,useEffect} from 'react';
function App() {
  const [msg,setMsg] = useState('"Welcome, Guest!"')

  useEffect(() =>{
    if(msg === '"Welcome, Alice!"'){
    console.log("User changed to Alice")
    }
    },[msg]);
  function handleClick(){
    setMsg('"Welcome, Alice!"')
  }
  return(
    <div>
      <p>{msg}</p>
      <button onClick={handleClick}>Login as Alice</button>
    </div>
  )
}
export default App;