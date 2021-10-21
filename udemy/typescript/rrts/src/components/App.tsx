// imports
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { Todo, fetchTodos, deleteTodo } from '../actions';

// required properties of _App
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

// interface to establish the 'fetching' state
interface AppState {
  fetching: boolean;
}

// the component
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div
          onClick={() => {
            this.onTodoClick(todo.id);
          }}
          key={todo.id}
        >
          {todo.title}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    );
  }
}

// ???
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// exporting App to index
export const App = connect(mapStateToProps, { deleteTodo, fetchTodos })(_App);
