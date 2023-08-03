import React from 'react'
import { useState , useEffect} from 'react'

function Clock() 
{
  //we're need to call updatetime func each sec => updating value of time variable associated with it wherever time is currently written
  // below means: first variable(time) initially=argument of the usestate function
  //second variabel is the function we will call whenever we need to update the first variable
  // and in the second func's arg will be the new value to update
  const [time, updatetime] = useState(new Date().toString());
  function showdate() {
    updatetime(new Date().toString());
  }
  // IMP: SETINTERVAL FUNC TAKES FUNC NAME CUZ WE'RE NOT CALLING THE FUNCTION BUT TELLING IT TO CALL IT
  setInterval(showdate, 1000);

  const c=0
  //useeffect is a function which takes a func and calls it everytime some change happens/render happens in this component
  //since my program is rendering time every sec, this will happen each sec.
  useEffect(()=>{
    console.log("render happened");
  },[time])// we put the dependency in this array,which tells that on change/render of which variable
  //will the useeffect will be called,if we leave dependencies then it will call it at any render/change

  return (
    <>
      <h1>Time is {time}</h1>
    </>
  );
}

export default Clock