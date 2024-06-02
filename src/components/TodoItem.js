import React from 'react';

const TodoItem = ({ todo, deleteTodo, editTask }) => {
  return (
    <div className="todo-item">
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <button onClick={() => editTask(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => todo.completed = !todo.completed}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TodoItem;
