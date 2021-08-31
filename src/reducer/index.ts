import { ITodoAction, ITodoItem, ITodoState, TODO_EVENTS } from '../typings';

const {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RESET_TODO_LIST
} = TODO_EVENTS;

const initTodoState = (todoState: ITodoState | {}): ITodoState => {
  const initState = {
    inputValue: '',
    todoList: []
  };

  if (!Object.getOwnPropertyNames(todoState).length) {
    return initState;
  }
  return {
    ...initState,
    ...todoState
  };
}

const todoReducer = (state: ITodoState, action: ITodoAction): ITodoState => {
  const todoList = state.todoList,
    todoItem = action.value as ITodoItem,
    id = action.value as number;
  switch (action.type) {
    case ADD_TODO:
      todoList.push(todoItem);
      return {
        ...state,
        todoList
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: todoList.filter(itm => itm.id !== id)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: todoList.map(itm => {
          if (itm.id === id) {
            itm.toggled = !itm.toggled;
          }
          return itm;
        })
      };
    case RESET_TODO_LIST:
      const newTodoList = action.value as ITodoItem[];
      return initTodoState({
        ...state,
        todoList: newTodoList
      });
    default:
      return state;
  }
}

export {
  initTodoState,
  todoReducer
};