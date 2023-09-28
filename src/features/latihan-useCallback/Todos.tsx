import { FC, memo } from "react";

interface Props {
  todos: string[];
  addTodo: () => void;
}
const Todos: FC<Props> = ({ todos, addTodo }) => {
  console.log("child render todos", new Date().getTime());
  return (
    <>
      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
        <button onClick={addTodo}>Tambah Todo</button>
      </div>
    </>
  );
};

export default memo(Todos);