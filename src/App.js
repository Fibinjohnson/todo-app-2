import React, { useState } from "react";
 import Todo from "./Todoitem";
import Inputarea from "./inputarea";

function App() {
 
  const [item,setItem]=useState('');
  const [addItem,setAdd]=useState([]);
  function handleChange(e){return setItem(e.target.value)}

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
      <Inputarea
        handleChange={handleChange}
        item={item}
        added={added}
      />
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

