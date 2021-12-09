import React from 'react';
import { Paper, TextField, Button, ListItem, ListItemSecondaryAction } from '@material-ui/core';
import useInputState from './hooks/useInputState';

function EditTodoForm({ toggleEdit, id, task, editTodo }) {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    toggleEdit();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginLeft: '1rem',
        width: '100%',
      }}
    >
      <TextField value={value} onChange={handleChange} style={{ width: '60%' }} autoFocus />
      <ListItemSecondaryAction>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
        <Button variant="outlined" style={{ marginLeft: '0.5rem' }} onClick={toggleEdit}>
          Cancel
        </Button>
      </ListItemSecondaryAction>
    </form>
  );
}

export default EditTodoForm;
