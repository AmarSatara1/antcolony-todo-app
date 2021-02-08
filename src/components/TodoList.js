import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../actions'
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <div className='todo-container'>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
  </div>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(task => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(task => !task.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);