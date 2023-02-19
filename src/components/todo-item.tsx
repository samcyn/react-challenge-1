import React from "react";

import type { Todo } from "../app.types";
import FieldInput from "./field-input";

type TodoProps = {
  todo: Todo,
  onToggle: (todo: Todo) => void
};

export function TodoItem({ onToggle, todo }: TodoProps) {
	const { title, tags = [], completed, id } = todo;

  const idString = id.toString();

  const handleToggle = () => {
    onToggle(todo);
  }

	return (
		<li className={`todo ${completed}`}>
			<div>
				<FieldInput type="checkbox" checked={completed} id={idString} onChange={handleToggle} />
				<label htmlFor={idString}>
          {title}
				</label>
			</div>
      <ul>
        {
          tags.map(tag => (<li key={tag}>{tag}</li>))
        }
      </ul>
		</li>
	);
}
