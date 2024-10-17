import React, { useEffect, useState } from 'react'

const ToDo = () => {

    // state to manage task, input field, and loading indicator

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch tasks from Json server on component mount
    useEffect( () =>{
        const fetchTasks = async () =>{
            setLoading(true);
            try{
                setTimeout(async () =>{
                    const response = await fetch('http://localhost:8000/tasks');
                    const data = await response.json();
                    setTasks(data);
                    setLoading(false);
                },2000); //2 second delay
            }catch(error){
                console.log("Error fetching tasks:", error);
            }finally{
                setLoading(false);
            }
        };
        fetchTasks();
    },[]);

    //Add a new task

    const addTask = async () => {
        if(newTask.trim()){
            const task = {id: Date.now(), text: newTask, completed:false};
            setTasks([...tasks, task]);
            setNewTask('');

            await fetch('http://localhost:8000/tasks',{
                method : 'POST',
                headers :{'Content-Type': 'application/json'},
                body : JSON.stringify(task),
            });
        }
    };


    // Delete a task by id
    const deleteTask = async(id) =>{
        setTasks(tasks.filter(task => task.id !==id));

        await fetch(`http://localhost:8000/tasks/${id}`,{
            method : 'DELETE'
        });
    };

    //Toggle task completion status

    const toggleTaskCompletion = async (id) =>{
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed} : task);
        setTasks(updatedTasks);

        const updatedTask = updatedTask.find(task => task.id === id);
        await fetch(`http://localhost:8000/tasks/${id}`,{
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(updatedTask)
        });
    };


  return (
    <div className='todo-container'>
      <h1>To-Do List</h1>
      <input type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder='Add a new task'
        />
      <button onClick={addTask}>Add Task</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ToDo;
