import { TodosProvider } from './contexts/TodosContext';
import TodoApp from './TodoApp';

function App() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}

export default App;
