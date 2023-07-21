import React, { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from "./Components/Todo";
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};


function App() {

  const [todos, setTodos] = useState(['learn react', 'workout']);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([input, ...todos]);
      setInput('');
    }
  };

  const handleChangeOfInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TODO:</h3>
        <form className={style.form}>
          <input type="text" className={style.input} value={input} placeholder="Add Todo" onChange={handleChangeOfInput}></input>
          <button className={style.button} onClick={addTodo} ><AiOutlinePlus size={30} /> </button>
        </form>
        <ul>
          <Todo todos={todos}></Todo>
        </ul>
      </div>
    </div>
  );
}

export default App;
