import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({ active, onClick, children }) => (
  <button
    onClick={ onClick }
    disabled={ active }
    className={`filter-todo ${active && 'filter-active'}`}
  >
    {children}
  </button>
);

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);