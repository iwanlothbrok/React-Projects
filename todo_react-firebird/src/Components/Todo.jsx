import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo }) => {

    return (
        <li className={style.li}>
            <div className={style.row}>
                <input type="checkbox" className="w-checkbox-lg h-checkbox-lg border-2 border-black rounded-md"></input>
                <p className={style.text}>{todo}</p>
            </div>
            <button>{<FaRegTrashAlt size={30} />}</button>
        </li>

    )
}

export default Todo
