import React,{useState} from 'react'
import Child from './List'

function App() {
  const [task,setTask] = useState('');
  const [msg,setMsg] = useState('add a task');
  const [tasks,setTasks] = useState([]);

function handleTask() {
  if(task.trim() === '') return;

  setTasks([...tasks,task]);
  setMsg(`Task added: ${task}!`);
  setTask('');


}

return(
  <div>
  <input type='text' value={task} onChange={(e) => setTask(e.target.value)} className='form-control mb-2'/>
  <button className='btn btn-primary' type='button' onClick={handleTask}>Add Task</button>
  <Child tasks={tasks} msg={msg} />
  </div>
)
};
export default App;