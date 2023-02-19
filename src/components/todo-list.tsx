import React from "react";

import type { Todo } from "../app.types";
import { TodoItem } from "./todo-item";

type TodoProps = {
	todos: Todo[];
	onToggle: (todo: Todo) => void;
};

const TodoList = ({ todos, onToggle }: TodoProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
			))}
		</ul>
	);
};

export default TodoList;
