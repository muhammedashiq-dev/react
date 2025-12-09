import React from "react"
import image from "./images/profile.jpg"
function App() {
let name = "ASHIQ";
return(
  <div className="container mt-4">
    <div className="row">
      <div className="col"></div>
      <div className="col">
         <div className="card shadow p-4 text-center" style={{width:"500px",height:"500px"}}>
      <h1 style={{color:"red"}}>Welcome to Reat Learning, {name}</h1>
   <div className="d-flex justify-content-center gap-3 ">
  <img src={image} alt="Profile" width="200" height="200" className="img-fluid rounded mb-3" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Sample" width="200" height="200" className="img-fluid rounded mb-3 ml-2"/>
</div>
<p className="text-muted">this is your first card</p>
    </div>
    </div>
    <div className="col"></div>
    </div> 
  </div>
);
};
export default App;