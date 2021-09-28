import React from 'react'
import './StyleTodoItem.css'
const completedStyle={
    color: "#cdcdcd"
}
function TodoItem(props) {
    return(
        
        <div className='styleTodoItem'>
         <input  type='checkbox' checked={props.item.completed} onChange={()=>props.onChange(props.item.id)} /> 
            <p style={props.item.completed ? completedStyle:null}>{props.item.task}</p>
         </div>
         
    )
}
export default TodoItem