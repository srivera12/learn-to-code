import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import useInputState from './hooks/useInputState';

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
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
