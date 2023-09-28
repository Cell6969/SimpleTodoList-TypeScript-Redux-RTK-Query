import { useCallback, useState } from "react";
import Todos from "./Todos";

const TanpaUsecallback = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const penambahan = () => {
    setCount((cn) => cn + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "Todo Baru"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={penambahan}>+</button>
      </div>
    </>
  );
};

export default TanpaUsecallback;