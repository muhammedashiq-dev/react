import React from 'react'
import {Link, useNavigate } from 'react-router-dom';

function App() {
  const students =['Riya','Alex','John','Sara'];
  const list = [];
  const navigate = useNavigate();
  const handleDefaultStudent = () => {
    navigate('/hello/Riya');
  }
  for(let i=0;i<students.length;i++)
  {
    list.push(<Link to={`/hello/${students[i]}`}><li key = {i}>{students[i]}</li></Link>)
  }
  return (
    <div>
      <ul>
        {list}
      </ul>
      <button className= 'btn btn-primary' onClick={handleDefaultStudent}>Go to Default Student (Riya)</button>
    </div>
  )
};
export default App;