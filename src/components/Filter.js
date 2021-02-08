import React from 'react';
import FilterLink from '../components/FilterLink';
import { VisibilityFilters } from '../actions';

const Filter = () => (
  <form>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </form>
);

export default Filter;