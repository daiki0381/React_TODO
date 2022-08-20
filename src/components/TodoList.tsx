import type { Todo } from '../App';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

export default TodoList;
