import { Button, ListItemSecondaryAction, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { DispatchContext } from './contexts/TodosContext';
import useInputState from './hooks/useInputState';

function EditTodoForm({ toggleEdit, id, task }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id: id, update: value });
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
