import { createContext, useReducer, Dispatch } from 'react';
import { IState, ITodoAction, TodoReducer } from '@/features/todo/reducers/todo_reducer';

const initialState: IState = {
  todos: [{ id: 1, text: 'Next.jsを試す', isDone: false }],
  loading: false,
};

export const TodoContext = createContext<{ state: IState; dispatch: Dispatch<ITodoAction> }>({
  state: initialState,
  dispatch: () => {},
});

export const TodoContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return <TodoContext.Provider value={{ state, dispatch }}>{props.children}</TodoContext.Provider>;
};
