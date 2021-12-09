import {
  AppBar,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import uuid from 'uuid/dist/v4';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './hooks/useTodoState';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, deleteTodo, toggleComplete, editTodo, clearTodos } = useTodoState(initialTodos);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [congratsDialog, setCongratsDialog] = useState(false);
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
    const undoneTodos = todos.filter((todo) => todo.isCompleted === false);
    if (todos.length > 0 && undoneTodos.length === 0) {
      setCongratsDialog(true);
    }
  }, [todos]);
  const toggleDeleteDialog = () => {
    setDeleteDialog(!deleteDialog);
  };
  const toggleCongratsDialog = () => {
    setCongratsDialog(!congratsDialog);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#222',
      }}
      className="TodoApp"
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">Today I Need To...</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={6}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
      <Button
        color="secondary"
        variant="contained"
        style={{ marginTop: '30px', marginLeft: '35%', width: '30%' }}
        onClick={toggleDeleteDialog}
        disabled={todos.length === 0}
      >
        CLEAR ALL
      </Button>
      <Dialog open={deleteDialog}>
        <DialogTitle>Clear All Tasks?</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: '0.5rem' }}
            onClick={() => {
              clearTodos();
              toggleDeleteDialog();
            }}
          >
            Clear All
          </Button>
          <Button style={{ margin: '0.5rem' }} variant="outlined" onClick={toggleDeleteDialog}>
            Cancel
          </Button>
          <p>This action cannot be undone.</p>
        </DialogContent>
      </Dialog>
      <Dialog open={congratsDialog}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <p>You completed all of your tasks for today.</p>
          <Button style={{ margin: '0.5rem' }} variant="outlined" onClick={toggleCongratsDialog}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}

export default TodoApp;
