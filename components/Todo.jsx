import React, { useRef, useState } from 'react';
import './CSS/Todo.css';  
import TodoItems from './TodoItems'; // Correct path to TodoItems

let count = 0;

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        if (inputRef.current.value.trim() !== "") {
            setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
            inputRef.current.value = "";
        }
    };

    return (
        <div className='todo'>
            <div className='todo-header'>To-Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder="Add your Task" className='todo-input' />
                <div onClick={add} className="todo-add-btn">ADD</div>
            </div>
            <div className='todo-list'>
                {todos.map((item, index) => (
                    <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
                ))}
            </div>
        </div>
    );
};

export default Todo;
