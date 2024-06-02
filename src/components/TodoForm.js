import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    } else {
      setInput('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (editTodo) {
      updateTodo({
        ...editTodo,
        text: input,
      });
    } else {
      addTodo({
        id: Math.random().toString(36).substr(2, 9),
        text: input,
        completed: false,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
