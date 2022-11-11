import React from 'react'
import { useState, useEffect } from 'react';

function List({todoadd, todos}) {
    let [nova, setNova]= useState("1");
    console.log(nova);
useEffect(()=>{ 

 },[todoadd])
return (
    <div className='main'>
        <input className="toggle-all" type="checkbox" onClick={(isChecked)=>{
            todos.map((todo, i)=>{
                todo.id="completed";
                todoadd([...todos]);
            })
            let volume = document.querySelectorAll('input[type="checkbox"]');
            
                for (var i = 0; i < volume.length; i++){
                    volume[i].checked = isChecked;
                }

        }}/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
            <ul className="todo-list">
    {
        todos.map((todo, i)=>{
                if(nova=="1"){
                    return (
                        <li key={i} id={"id"+i} className={todo.id}>
                            <div className="view">
                                <input className="toggle" type="checkbox" id={"check"+i} onClick={()=>{
                                    if(document.getElementById("id"+i).classList.contains("notcompleted")==true){
                                        todos[i]["id"]="completed"; 
                                        todoadd([...todos]);
                                    }
                                    else{
                                        todos[i]["id"]="notcompleted";
                                        todoadd([...todos]); 
                                    }    
                                }}/>
                                <label>{todo.todo}</label>
                                <button className="destroy" onClick={()=>{
                                    todos.splice(i,1)
                                    todoadd([...todos])
                                }}></button>
                            </div>
                        </li>
                    )
                }
                else if(todo.id=="notcompleted" && nova=="2"){
                    return (
                        <li key={i} id={"id"+i} className={todo.id}>
                            <div className="view">
                                <input className="toggle" type="checkbox" id={"check"+i} onClick={()=>{
                                    if(document.getElementById("id"+i).classList.contains("notcompleted")==true){
                                        todos[i]["id"]="completed"; 
                                        todoadd([...todos]);
                                    }
                                    else{
                                        todos[i]["id"]="notcompleted";
                                        todoadd([...todos]); 
                                    }    
                                }}/>
                                <label>{todo.todo}</label>
                                <button className="destroy" onClick={()=>{
                                    todos.splice(i,1)
                                    todoadd([...todo])
                                }}></button>
                            </div>
                        </li>
                    )
                }
                else if(todo.id=="completed" && nova=="3"){
                    return (
                        <li key={i} id={"id"+i} className={todo.id}>
                            <div className="view">
                                <input className="toggle" type="checkbox" id={"check"+i} onClick={()=>{
                                    if(document.getElementById("id"+i).classList.contains("notcompleted")==true){
                                        todos[i]["id"]="completed"; 
                                        todoadd([...todos]);
                                    }
                                    else{
                                        todos[i]["id"]="notcompleted";
                                        todoadd([...todos]); 
                                    }    
                                }}/>
                                <label>{todo.todo}</label>
                                <button className="destroy" onClick={()=>{
                                    todos.splice(i,1)
                                    todoadd([...todos])
                                }}></button>
                            </div>
                        </li>
                    )
                }
            
        })
        
    }
    <br />
</ul>
        <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length}</strong>
                    items left
                </span>
                <ul className="filters">
                <form>
                    <input type="button" value="All" id="checkbox1" onClick={()=>{
                        document.getElementById("allclearbutton").style.display="none";
                        setNova("1");
                    }}></input> 
                    <input type="button" value="Active" id="checkbox2" onClick={()=>{
                        document.getElementById("allclearbutton").style.display="none";
                        setNova("2");
                    }}></input> 
                    <input type="button" value="Completed" id="checkbox3" onClick={()=>{
                        document.getElementById("allclearbutton").style.display="block";
                        setNova("3");
                    }}></input>
                </form> 
                </ul>
                <button className="clear-completed" id="allclearbutton" onClick={()=>{
                    todoadd([...todos]);
                    todos.map((todo, i)=>{
                        if(todo.id=="completed"){
                            todos.splice(i);
                            console.log(todos);
                        }
                        todoadd([...todos]);
                    })
                }}>Clear completed</button>
            </footer>
    </div>
  )
}

export default List;
