import React, {useState} from 'react'
import "./TodoApp.css"

function TodoApp() {
    const [task, setTask] = useState("")
    const [tasklist, setTaskList] = useState([])

    const addTask = (e) =>{
        e.preventDefault();
        if(task !== "") {
            const taskdetails ={
                id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false
            };
            setTaskList([...tasklist].concat(taskdetails))
            setTask("")
        }
    }
    const deleteTask = (e, id) =>{ 
        e.preventDefault();
        setTaskList(tasklist.filter((t)=>t.id !== id))

    }

    const completeTask = (e, id) =>{
        e.preventDefault();
        const element = tasklist.findIndex(elem =>elem.id === id)
        const newTaskList = [...tasklist]
        newTaskList[element]={
            ...newTaskList[element],
            isCompleted:true
        }
        setTaskList(newTaskList)
    }
    console.log(tasklist)
    return (
        <div className="bb">
            <div className="todo">
                <div><p className="heading">Todo List</p></div>
                <form onSubmit={addTask}>
                    <input type="text" 
                            placeholder="Add Task here!" 
                            value={task} 
                            onChange={e=>setTask(e.target.value)} 
                    />
                    <button type="submit" className="add-btn">Add</button>
                </form>
                {tasklist !==[] ? (
                    <ul >
                        {tasklist.map((task)=>(
                            <li key={task.id} className={task.isCompleted? "crossText" : "listItem"}>
                                {task.value}
                                <button className="completed" onClick={e=>completeTask(e, task.id)}>Completed</button>
                                <button className="delete" onClick={e=>deleteTask(e, task.id)}>Delete</button>
                                
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default TodoApp
