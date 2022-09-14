interface ITodoState {
  id: number,
  text: string,
  isDone: boolean,
}

export interface ITodoAction {
  type: ActionType,
  payload: IState
}

export interface IState {
  todos: ITodoState[],
  loading: boolean,
}

export enum ActionType {
  TODO_FETCH = 'TODO_FETCH',
  TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS',
  TODO_UPDATE = 'TODO_UPDATE',
}

export const TodoReducer: React.Reducer<IState, ITodoAction> = (state: IState, action: ITodoAction) => {
  switch (action.type) {
    case ActionType.TODO_FETCH:
      return {
        loading: true,
        todos: action.payload.todos,
      }
    case ActionType.TODO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ActionType.TODO_UPDATE:
      return {
        ...state,
        todos: action.payload.todos,
      }
  }
}
