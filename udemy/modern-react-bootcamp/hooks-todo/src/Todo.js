import { Checkbox, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons/';
import React, { useState } from 'react';
import EditTodoForm from './editTodoForm';

function Todo({ id, task, isCompleted, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleToggleComplete = () => {
    toggleComplete(id);
  };
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <ListItem style={{ backgroundColor: !isCompleted ? 'white' : 'lightblue', height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEdit={handleToggleEdit} />
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

export default Todo;
