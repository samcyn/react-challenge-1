import React, { useState } from 'react';

import type { Todo } from "../app.types";
import { convertStringToTags, createId } from "../utils";
import FieldInput from './field-input';

type AddTodoFormProps = {
  onAdd: (todo: Todo) => void;
};

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [form, setForm] = useState({
    title: '',
    tags: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, tags } = form;
    // show a notification/validation errors
    if(!title) {
      return;
    }
    const todo: Todo = {
      title,
      completed: false,
      id: createId(),
      tags: convertStringToTags(tags)
    };
    onAdd(todo);
    
    // reset form
    setForm({
      title: '',
      tags: '',
    });
  };

  return (<form onSubmit={handleSubmit}>
    <FieldInput name="title" value={form.title} onChange={handleChange} required />
    <FieldInput name="tags" value={form.tags} onChange={handleChange}/>
    <FieldInput type="submit" value="Add" />
  </form>);
}
