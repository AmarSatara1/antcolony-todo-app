import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ onClick, completed, text, removeTodo }) => (
  <>
    <ul
      onClick={onClick}
      className={`todo ${completed && 'completed slide'}`}
    >
      <FontAwesomeIcon icon={faCheck} onClick={removeTodo}/>
      {text} 
    </ul>
  </>
);

export default Todo;