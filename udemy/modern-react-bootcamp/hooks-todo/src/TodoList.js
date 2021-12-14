import { Container, Divider, List, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import uuid from 'uuid/dist/v4';
import { TodosContext } from './contexts/TodosContext';
import Todo from './Todo';

function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <Paper>
      {todos.length !== 0 ? (
        <List>
          {todos.map((todo) => (
            <React.Fragment key={uuid()}>
              <Todo key={todo.id} {...todo} />
              {todo !== todos[todos.length - 1] ? <Divider key={uuid()} /> : null}
            </React.Fragment>
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
