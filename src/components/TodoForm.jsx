import React, { useState } from 'react';
import '../stylesheets/TodoForm.css';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
  //State
  const [input, setInput] = useState('');

  //Functions
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: input,
      isCompleted: false
    }

    props.onSubmit(newTodo)
  };

  //Structure
  return (
    <form 
      className='todo-form'
      onSubmit={handleSend}
    >
      <input 
        className='todo-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='text'
        onChange={handleChange}
      />
      <button className='todo-button' type='submit'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TodoForm;