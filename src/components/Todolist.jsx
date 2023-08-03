import React from 'react'

function Todolist(props) {
  return (
    <li className="items-in-list">
        
        {props.item}
        
        <span className='delete' onClick={(e)=>{
            props.delete_item(props.index)
            //on rendering this element , the index of this element will be fixed and if deleted, this index will be deleted
        }}
        >-</span>

    </li>
  )
}

export default Todolist