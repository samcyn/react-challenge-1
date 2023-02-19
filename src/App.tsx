import { useState } from "react";
import type { Todo } from "./app.types";
import { AddTodoForm } from "./components/add-todo-form";
import TodoList from "./components/todo-list";


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (todo: Todo) => {
    setTodos(prev => [
      ...prev,
      todo,
    ]);
  }

  const onToggle = (todo: Todo) => {
    const newTodos = todos.map(record => {
      if(record.id === todo.id) {
        return {
          ...record,
          completed: !todo.completed
        }
      }
      return record;
    });
    setTodos(newTodos); 
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
        {/* list of todos - implement me */}
        <TodoList todos={todos} onToggle={onToggle} />
      </section>
      <section>
        <h2>Completed</h2>
        <ul>{/* list of completed - implement me */}</ul>
      </section>
    </>
  );
}

export default App;
