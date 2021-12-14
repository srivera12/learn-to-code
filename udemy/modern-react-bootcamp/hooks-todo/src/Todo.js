import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons/';
import React, { memo, useContext, useState } from 'react';
import { DispatchContext } from './contexts/TodosContext';
import EditTodoForm from './editTodoForm';

function Todo({ id, task, isCompleted }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLECOMPLETE', id: id });
  };
  const handleDeleteTodo = () => {
    dispatch({ type: 'DELETE', id: id });
  };
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <ListItem style={{ backgroundColor: !isCompleted ? 'white' : 'lightblue', height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEdit={handleToggleEdit} />
      ) : (
        <>
          <Checkbox onClick={handleToggleComplete} tabIndex={-1} checked={isCompleted} color="primary" />
          <ListItemText style={{ textDecoration: !isCompleted ? 'none' : 'line-through' }}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={handleToggleEdit} disabled={isCompleted}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDeleteTodo}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
