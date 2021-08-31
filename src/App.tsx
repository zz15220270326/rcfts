import React, { useReducer, useEffect } from 'react';
// ? components
import TodoList from './components/todo-list';

import { localSet, localGet } from './libs/utils';
import { todoReducer, initTodoState } from './reducer';
import { TODO_EVENTS, TODO_STATES, ITodoItem, ITodoState } from './typings';

const {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RESET_TODO_LIST
} = TODO_EVENTS,
 { TODO_LIST } = TODO_STATES;


function App() {
  const [todoState, todoDispatch] = useReducer(
    todoReducer,
    { inputValue: '', todoList: [] } as ITodoState,
    initTodoState
  );
  
  // 本地获取state-todoList
  useEffect(() => {
    const dispatchTodoList = (): void => {
      const todoList = localGet(TODO_LIST) as ITodoItem[];
      if (!Object.getOwnPropertyNames(todoList).length) {
        return;
      }
      todoDispatch({
        type: RESET_TODO_LIST,
        value: todoList
      });
    }

    return dispatchTodoList();
  }, []);
  // 本地存储state-todoList
  useEffect(() => {
    return localSet(TODO_LIST, todoState.todoList);
  }, [todoState]);

  return (
    <div className="App">
      <TodoList
        todoList={ todoState.todoList }
        addTodoItem={
          (todoItem: ITodoItem) => todoDispatch({ type: ADD_TODO, value: todoItem })
        }
        toggleTodoItem={
          (id: number) => todoDispatch({ type: TOGGLE_TODO, value: id }) 
        }
        removeTodoItem={
          (id: number) => todoDispatch({ type: REMOVE_TODO, value: id })
        }
      />
    </div>
  );
}

export default App;
