import { Button, Paper, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { DispatchContext } from './contexts/TodosContext';
import useInputState from './hooks/useInputState';

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', task: value });
    reset();
  };
  return (
    <Paper
      style={{
        margin: '1rem 0',
        padding: '0 1rem',
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
        <Button variant="contained" color="primary" style={{ marginBottom: '0.5rem', marginLeft: '70%' }}>
          Add
        </Button>
      </form>
    </Paper>
  );
}

export default TodoForm;
