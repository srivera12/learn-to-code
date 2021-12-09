import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, Divider, ListItemText, Typography, Container } from '@material-ui/core';
import Todo from './Todo';
import uuid from 'uuid/dist/v4';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <Paper>
      {todos.length !== 0 ? (
        <List>
          {todos.map((todo) => (
            <>
              <Todo
                key={todo.id}
                {...todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
              {todo !== todos[todos.length - 1] ? <Divider key={uuid()} /> : null}
            </>
          ))}
        </List>
      ) : (
        <Container style={{ height: '30vh', padding: '40px' }}>
          <Typography style={{ marginLeft: '8%' }}>
            You don't have any todos yet! Add some using the form above.
          </Typography>
        </Container>
      )}
    </Paper>
  );
}

export default TodoList;
