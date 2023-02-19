import React, { useMemo, useState } from "react";
import type { Todo } from "./app.types";
import { AddTodoForm } from "./components/add-todo-form";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const onToggle = (todo: Todo) => {
    const newTodos = todos.map((record) => {
      if (record.id === todo.id) {
        return {
          ...record,
          completed: !todo.completed,
        };
      }
      return record;
    });
    setTodos(newTodos);
  };

  const { pendingTodos, completedTodos } = useMemo(() => {
    const newTodo = todos.reduce(
      (accumulator, currentValue) => {
        if (currentValue.completed) {
          accumulator.completedTodos.push(currentValue);
        } else {
          accumulator.pendingTodos.push(currentValue);
        }
        return accumulator;
      },
      {
        pendingTodos: [],
        completedTodos: [],
      } as {
        pendingTodos: Todo[];
        completedTodos: Todo[];
      }
    );

    return newTodo;
  }, [todos.length, onToggle]);

  return (
    <>
      <h1>My Todos</h1>
      <section>
        <article>
          <AddTodoForm onAdd={onAddTodo} />
        </article>
      </section>
      <section>
        {/* list of todos - implement me */}
        <TodoList todos={pendingTodos} onToggle={onToggle} />
      </section>
      {completedTodos.length > 0 && (
        <section>
          <h2>Completed</h2>
          {/* list of completed - implement me */}
          <TodoList todos={completedTodos} onToggle={onToggle} />
        </section>
      )}
    </>
  );
}

export default App;
