import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../../features/toDO/toDoASlice";
import './toDoItem.css'

function Todoitem() {

    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos.todos)


    const completeTodoH = (id) => {
        dispatch(completeTodo(id))
    } 


    console.log(todos)
  return (
    <div >
        {
            todos.map((item,idx)=>{
                return(
                    <div key={idx}>
                        <span className={`todo-list-item ${item.completed ? `todo-list-item-completed`:""}`}>
                        {item.text}
                        </span>
                        <input type="button"  value="Done"
                        onClick={()=>completeTodoH(item.id)}
                        />
                    
                    </div>
                )
            })
        }
    </div>
  );
}

export default Todoitem;
