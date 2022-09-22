import { useState, useContext } from 'react';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { TitleComponent } from '@/features/common/components/title_component';
import { TodoContext } from '@/features/todo/providers/todo_provider';
import { ActionType } from '@/features/todo/reducers/todo_reducer';
import styles from '@/features/todo/todo_container.module.scss';

export const TodoContainer = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;
  const [text, setText] = useState<string>('');
  const [isBlank, setIsBlank] = useState(false);

  const onSubmit = () => {
    if (!text) {
      setIsBlank(true);
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
    <div className={styles.root}>
      <TitleComponent title='ToDo Page' />

      <div className={styles.todo}>
        <input type='text' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={onSubmit}>追加</button>
        {isBlank && <div><small>* textが空です</small></div>}

        <ul>
          {todos.map(t => (
            <li key={t.id}>
              <input type='checkbox' checked={t.isDone} onChange={() => onChecked(t)} />
              {t.id}: {t.text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SubTitleComponent title='useReducer' />
        <p>複雑なstateの更新(action)をするときに使う。</p>
      </div>

      <div>
        <SubTitleComponent title='createContext' />
        <p>
          まず<code>createContext</code>でグローバルにしたいstateやdispatch(action)<br />
          <code>useReducer</code>を使って定義して、Contextにする。
        </p>
      </div>

      <div>
        <SubTitleComponent title='Context.Provider' />
        <p>
          ProviderでContextを流す（グローバルにする）。
        </p>
        <p>
          Providerは<code>_app.tsx</code>で<code>Component</code>を囲う。<br />
          複数あるとどんどんネストされる。
        </p>
      </div>

      <div>
        <SubTitleComponent title='useContext' />
        <p>
          Providerが流したContextを<code>useContext</code>で受け取る。<br />
          それによって、グローバルなstateとdispatch(action)を受け取り、dispatchによってそのstateを更新できる。
        </p>
        <p>
          <code>HomeContainer</code>と<code>TodoContainer</code>で同じstateを読んでいる。
        </p>
      </div>
    </div>
  );
};
