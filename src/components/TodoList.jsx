import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import '../stylesheets/TodoList.css';

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const updatedTodos = [todo, ...todos];
      setTodos(updatedTodos);
    }
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className='todo-list-container'>
        {
          todos.map((todo) =>
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted} />
          )
        }
      </div>
    </>
  );
}

export default TodoList;