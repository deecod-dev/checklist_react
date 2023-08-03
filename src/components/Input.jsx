import React, {useState ,useCallback } from 'react'

function Input(props) {
  const [text,updtext]=useState("")
  const handle_enter=(e)=>
  {
    if(e.keyCode===13)
    {
      if (text === "")
      {
        alert("Text can't be empty");
      } 
      else{props.updatelist(text);}
    }
  }

  return (

    //adding handle_enter adding to input only works cuz when we press enter, we've probably clicked input bar
    // you can click outside after enter text , thenpress enter and it won't work
    <div className="input-container">

      <input 
      onChange=
      {(e)=>
        {
          console.log(e.target.value); //e.target will give the element to with we interacted and change happened
          updtext(e.target.value)
        }
      } 
      onKeyDown={handle_enter}
      type="text" className="input-box" placeholder='Enter the task'/>
      
      <button className="add-btn" 
      onClick=
      {()=>
        {
          if(text===""){
            alert("Text can't be empty")
          }
          else{props.updatelist(text);}
        }
      }>+</button>
    </div>
  )
}

export default Input