export enum TODO_EVENTS {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  RESET_TODO_LIST = 'RESET_TODO_LIST'
}

export enum TODO_STATES {
  INPUT_VALUE = 'INPUT_VALUE',
  TODO_LIST = 'TODOLIST'
}

export interface ITodoItem {
  id: number;
  content: string;
  toggled: boolean;
}

export interface ITodoListProps {
  todoList: ITodoItem[];
  addTodoItem: (todoItem: ITodoItem) => void;
  toggleTodoItem: (id: number) => void;
  removeTodoItem: (id: number) => void;
}

export interface ITodoState {
  inputValue: string;
  todoList: ITodoItem[];
}

export interface ITodoAction {
  type: TODO_EVENTS;
  value: number | ITodoItem | ITodoItem[];
}
