import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import Todos from './Todos';

import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');


    console.log(todos.id)






    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(data);
        });

        return () => unsubscribe();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        try {
            await addDoc(collection(db, 'todos'), { title: inputValue });
            setInputValue('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    const delettodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    };

    const style = {
        bg: `h-screen w-screen p-4 bg-gradient-to-r  from-[#2F80ED] to-[#1Cb5E0]`,
        container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
        heading: `text-3xl font-bold text-center text-gray-800 p-2`,
        button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
        input: `border p-2 w-full  text-xl`,
        count: `text-center p-2`
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>Todo App</h3>
                <div style={{ display: 'flex', justifyContent: "space-between" }} >
                    <input
                        type="text"
                        className={style.input}
                        placeholder='Add Todo...'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={addTodo} type="button" className={style.button}><AiOutlinePlus size={30} /></button>

                </div>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <Todos
                                key={index}
                                todo={todo}
                                delettodo={delettodo}
                            // onEdit={editTodo}
                            />
                        )
                    })}
                </ul>
                <p className={style.count}>You Have {todos.length} todos</p>
            </div>
        </div>
    )
}

export default Todo;
