import React, { useEffect, useState } from 'react';
import './CSS/TodoItems.css';
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const TodoItems = ({ no, display, text, setTodos }) => {
    const [currentDisplay, setCurrentDisplay] = useState(display);

    useEffect(() => {
        setCurrentDisplay(display);
    }, [display]);

    const toggle = () => {
        setTodos(prevTodos => 
            prevTodos.map(item => {
                if (item.no === no) {
                    item.display = item.display === "" ? "line-through" : "";
                    setCurrentDisplay(item.display); // Update local state immediately
                }
                return item;
            })
        );
    };

    const removeItem=()=>{
        setTodos(prevTodos=>prevTodos.filter(item=>item.no !==no));
    };

    return (
        <div className='todoitems'>
            <div className="todoitems-container" onClick={toggle}>
                {currentDisplay === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
                <div className='todoitems-text' style={{ textDecoration: currentDisplay }}>{text}</div>
            </div>
            <img className="todoitems-cross-icon" src={cross} alt="" onClick={removeItem}/>
        </div>
    );
};

export default TodoItems;
