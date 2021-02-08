import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <ul
    onClick={onClick}
    className={`todo ${completed && 'completed slide'}`}
  >
    {text}
  </ul>
);

export default Todo;