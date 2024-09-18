import React from 'react'
const tasks=['Learn react','Practice coding','Build Projects']
const handleTasks = ()=>{
    console.log(tasks)
}



const TaskList = () => {
  return (
    <div>
    <h1>TaskList</h1>
    <button onClick={handleTasks}>Get Tasks</button>
    <ul>
        {
            tasks.map((task,index)=>(
               <li key={index}>  {task}
               <button onClick={handleClick(task)}>Click me</button>               </li>
              
            
            ))
        }
</ul>
    </div>
  )
}

export default TaskList