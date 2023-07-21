import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from "./Components/Todo";
import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore";

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

  const [todos, setTodos] = useState([]);

  // CREATE 

  // READ, our function which reads all of the todos from the database 
  useEffect(() => {

    const fetchTodos = async () => {
      try {
        const dbTodos = await getDocs(collection(db, 'todos'));
        const todosData = [];

        // Iterate over the documents and extract the data
        dbTodos.forEach((doc) => {
          todosData.push(doc.data().text);
        });


        setTodos(todosData);
      }
      catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();

  }, [])


  // UPDATE

  // DELETE

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TODO:</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Add Todo"></input>
          <button className={style.button} ><AiOutlinePlus size={30} /> </button>
        </form>
        <ul>

          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have {todos.length} todos.</p>
      </div>
    </div>
  );
}

export default App;
