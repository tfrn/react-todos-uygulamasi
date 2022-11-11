import React from 'react'
import { useState } from 'react';
    
function Form({todoadd, todos}) {
    let [task, setTask] = useState("");
    let taskOnChange = (event)=> setTask(event.target.value)
    let save = (event)=>{
        event.preventDefault();
        if(task === ""){
            return false;
        };
        todoadd([...todos, {id:"notcompleted", todo:task}]);
        setTask("");
    }
    return (
        <div className='header'>
            <form onSubmit={save}>
                <input name="task" className='new-todo' placeholder='What needs to be done?' value={task} onChange={taskOnChange} autoFocus></input>
            </form>
        </div>
    )
}

export default Form;
