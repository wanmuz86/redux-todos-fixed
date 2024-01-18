
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../src/features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;