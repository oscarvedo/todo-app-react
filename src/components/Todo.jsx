import React from 'react';
import '../stylesheets/Todo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, text, isCompleted, completeTodo, deleteTodo }) {
  return (
    <div className={isCompleted ? 'todo-container completed' : 'todo-container'}>
      <div 
        className='todo-text'
        onClick={() => completeTodo(id)}>
        {text}
      </div>
      <div 
        className='todo-icons-container'
        onClick={() => deleteTodo(id)}>
        <AiOutlineCloseCircle className='todo-icon' />
      </div>
    </div>
  );
}

export default Tarea;