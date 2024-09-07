import { useState, useEffect} from 'react'
import { TodoProvider } from './context/ToDoContext';
import { TodoForm, TodoItem } from './components';

function App() {
const  [todos,setTodos]=useState([]);

const addtodo=(todo)=>{
  setTodos((prev)=>[...prev,{id:Date.now(),...todo}]) //...prev for storing the purana value jo already exist krta hoga
}

const updatetodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))//ismeh map ko loop ki tarh hai ki woh find karega ki woh jo id update krna hai woh jb milegi uski jagan naya todo daal dena hai bs
}

const deletetodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id ))//ismeh filter ka use kar rahe hai ki(filter hamehsaha ture ke liye he kaam krta ahi) toh jb tk woh same nahi hone tb tk woh kaam karega aaur new array main store karega..kyunki too kya hai ek array he toh hai..
}

const togglecomplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prev,completed:!prevTodo.completed}:prevTodo))
}//ismeh pehle hmne ..prev kr ke saari value li bs completed waii he changekr di


useEffect(() => {
  const todos=JSON.parse(localStorage.getItem("todos"));

  if(todos && todos.length>0){
      setTodos(todos);
  }
}, [])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])




  return (
    <TodoProvider value={{addtodo,updatetodo,deletetodo,togglecomplete,todo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
