import React from 'react';
import { useEffect, useState } from 'react';
import "./style.css";
import Form from "./componentform"
import List from "./componentlist"
import Footer from "./footer"
function Maincomponent() {
let [todos, settodos] = useState([{id:"notcompleted", todo:"Learn JavaScript"},{id:"notcompleted",todo:"Learn React"}]);

useEffect(()=>{ 
  settodos([...todos])
},[settodos])

  return (
    <div>
      <div className='todoapp'>
      <h1>todos</h1>
      <Form todoadd={settodos} todos={todos}></Form>
      <List todoadd={settodos} todos={todos}></List>
    </div>
    <Footer></Footer>   
    </div>
  )
}

export default Maincomponent;
