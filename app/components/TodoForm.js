// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../src/features/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add ToDo</button>
    </div>
  );
};

export default TodoForm;