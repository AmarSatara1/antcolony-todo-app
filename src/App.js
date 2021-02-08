import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

const App = () => (
  <div>
    <header>TODO App</header>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
);

export default App;