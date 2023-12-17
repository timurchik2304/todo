import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {v4} from "uuid"
import { addTodo } from "../../features/toDO/toDoASlice";
import Todoitem from "../toDoItem/toDoitem";

const ToDoList = ( ) =>{
    const[todoValue,SetTodo] = useState("")
    const dispatch = useDispatch()

    const addTodoH = ()=>{
        const toDo ={
            id:v4(),
            text:todoValue,
            completed:false
        }
        dispatch(addTodo(toDo))
        SetTodo('')
    }
    return(
        <div>
            <h2>List of goods</h2>
            <form>
                <input type="text" placeholder="Name of the product" onChange={(e) =>SetTodo(e.target.value) } />
                <input type="button" value="Add"
                onClick={()=> addTodoH()   }
                />
                </form>
                <Todoitem/>
        </div>
    )
}
export default ToDoList;