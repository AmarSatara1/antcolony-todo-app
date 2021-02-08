import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const submitTodo = (e) => {
    e.preventDefault();

    if (!input.value.trim()) {
      return
    }

    dispatch(addTodo(input.value));
    input.value='';
  }

  return (
    <div>
      <form className='form' onSubmit={(e) => {submitTodo(e)}}>
        <input type='text' ref={el => (input = el)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);