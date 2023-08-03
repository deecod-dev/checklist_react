import React from 'react'
import "./App.css"
import Input from './components/Input'
import { useState } from 'react';
import Todolist from './components/Todolist';
// import Clock from './components/Clock'
// import Item from './components/Item';


function App() {
  //using usestate for list
  const [lst, updlst] = useState([]);

  let updatelist=(item)=> {
    updlst([...lst, item]);
  }

  let delete_item=(key)=>{
    let newlst=[...lst]
    newlst.splice(key,1)
    updlst([...newlst])
  }

    return (
      <div className="main-container">
        <div className="content-container">
          <h1>Your daily To-do list</h1>
          <div className="inner-container">
            <Input updatelist={updatelist} />
            <hr></hr>
            {lst.map((listitem, i) => {
              return (
                <Todolist
                  key={i}
                  index={i}
                  item={listitem}
                  delete_item={delete_item}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default App