import Link from 'next/link';
import { useState, useContext } from 'react';
import { Title } from '@/features/common/components/title';
import { TodoContext } from '@/features/todo/providers/todo_provider';
import { ActionType } from '@/features/todo/reducers/todo_reducer';

export const TodoContainer = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;
  const [text, setText] = useState<string>('');

  const onSubmit = () => {
    if (!text) {
      console.log('textが空');
      return;
    }
    dispatch({
      type: ActionType.TODO_UPDATE,
      payload: {
        todos: [...todos, { id: todos.length + 1, text: text, isDone: false }],
        loading: false,
      },
    });
    setText('');
  };

  const onChecked = (todo: typeof todos[0]) => {
    const newTodos = todos.map(t => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    dispatch({
      type: ActionType.TODO_UPDATE,
      payload: {
        todos: newTodos,
        loading: false,
      },
    });
  };

  return (
    <div>
      <Title title='ToDo Page' />

      <div>
        <input type='text' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={onSubmit}>追加</button>
      </div>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type='checkbox' checked={t.isDone} onChange={() => onChecked(t)} />
            {t.id}: {t.text}
          </li>
        ))}
      </ul>

      <Link href='/'>Back to home</Link>
    </div>
  );
};
