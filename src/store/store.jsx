import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/toDO/toDoASlice";

export const  store =  configureStore({
    reducer:{
        todos: todoSlice.reducer ,        
    },
})