import { useState } from 'react';
import TodoList from './components/TodoList';

export type Todo = {
  id: number;
  text: string;
};

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: 'todo1' },
    { id: 1, text: 'todo2' },
  ]);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const addTodo = () => {
    setTodos([...todos, { id: todos.length, text: inputText }]);
    setInputText('');
  };

  return (
    <>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button type="button" onClick={addTodo}>
        追加
      </button>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
