import type { Todo } from "../app.types";

import FieldInput from "./field-input";

type TodoProps = Todo & { onToggle: (todo: Todo) => void };

export function TodoItem({ onToggle, ...todo }: TodoProps) {
	const { title, tags = [], completed, id } = todo;

  const idString = id.toString();

	return (
		<li className={`todo ${completed}`}>
			<div>
				<FieldInput type="checkbox" id={idString} />
				<label htmlFor={idString}>
          {title}
				</label>
			</div>
      <ul>
        {
          tags.map(tag => (<li>{tag}</li>))
        }
      </ul>
		</li>
	);
}
