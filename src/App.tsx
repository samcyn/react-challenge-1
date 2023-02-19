import { useState } from "react";
import type { Todo } from "./app.types";
import { AddTodoForm } from "./components/add-todo-form";
import { TodoItem } from "./components/todo-item";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (todo: Todo) => {
    setTodos(prev => [
      ...prev,
      todo,
    ]);
  }

  return (
    <>
      <h1>My Todos</h1>
      <section>
        <article>
          <AddTodoForm onAdd={onAddTodo}/>
        </article>
      </section>
      <section>
        <ul>{/* list of todos - implement me */}</ul>
      </section>
      <section>
        <h2>Completed</h2>
        <ul>{/* list of completed - implement me */}</ul>
      </section>
    </>
  );
}

export default App;
