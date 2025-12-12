import React,{useState} from 'react'
import Child from './Child'

function App() {  
  const [isLightOn,setIsLightOn] = useState(false)

const handleToggle = () => {
  setIsLightOn(!isLightOn);
}

return(
  <div>
    <h1>the room is {isLightOn? 'bright' : 'dark '}</h1>
    <Child isLightOn = {isLightOn} onToggle = {handleToggle} />
  </div>
);
}
export default App;