import React, {useState,useEffect} from 'react';
function App() {
  let [msg,setMsg] = useState('"Hello user!Welcome to our site."')
  useEffect(() =>{
    console.log('"Welcome message displayed"')
  },[])
  return(
    <div>
      <p>{msg}</p>
    </div>
  )
}
export default App;