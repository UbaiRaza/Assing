import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEdit } from "react-icons/md";

const Todos = ({ todo, delettodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);

    // const handleEdit = () => {
    //     setIsEditing(true);
    // };


    const style = {
        li: `bg-slate-200 p-4 my-2 capitalize`,
        liComplet: `bg-slate-400 p-4 my-2 capitalize`,
        row: `flex`,
        textComplet: `ml-2 cursoor-pointer line-through`,
        text: `ml-2 cursoor-pointer`,
        button: `cursoor-pointer  flex items-center`,

    }
    return (<>
        <li style={{ display: "flex", justifyContent: "space-between" }} className={style.li}>
            <div className={style.row}>
                <input type="checkbox" />
                <p className={style.text}>{todo.title}</p>
            </div>
            <button onClick={() => delettodo(todo.id)}><FaRegTrashAlt /></button>

        </li >

    </>
    )
}

export default Todos
