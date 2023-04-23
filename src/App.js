import React, { useState } from "react";
 import Todo from "./Todoitem";


function App() {
 
  const [item,setItem]=useState('');
  const [addItem,setAdd]=useState([]);
  function added(){
    setAdd((p)=>{return(
      [...p,item]);
    })}
    function deleteItem(id) {
      setAdd((p)=>{return(p.filter((item,index)=>{return index !== id;
      })
      )})
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">            
        <input value={item} onChange={(e)=>setItem(e.target.value)} type="text" />
        <button onClick={added}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {addItem.map((list,index)=>(<Todo 
        key={index}
        id={index}
        onChecked={deleteItem}
        text={list}/>))}
       
        </ul>
      </div>
    </div>
  );
}

export default App;

