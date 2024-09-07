import { createContext,useContext } from "react";

export const ToDoContext=createContext({
    todo:[
       { id:1,
        todo:"todomsg",
        completed: false,
    }
    ],
    addtodo: (todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
}); //creating a context


export const TodoProvider=ToDoContext.Provider //sharing

export const useTodo=()=>{
    return useContext(ToDoContext);         //final useing
}
