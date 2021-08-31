import React, { FC } from 'react';
import './index.scss';

// ? components
import TodoHeader from './todo-header';
import TodoItem from './todo-item';

import { ITodoItem, ITodoListProps } from '../../typings';

const TodoList: FC<ITodoListProps> = (
  { todoList, addTodoItem, toggleTodoItem, removeTodoItem }
) => {
  return (
    <div className="todo-list-wrapper">
      <TodoHeader addTodoItem={ addTodoItem } />
      {
        todoList.length
          ?
          todoList.map((todoItem: ITodoItem) => (
            <TodoItem
              key={ todoItem.id }
              todoItem={ todoItem }
              toggleTodoItem={ toggleTodoItem }
              removeTodoItem={ removeTodoItem }
            />
          ))
          :
          ''
      }
    </div>
  );
}

export default TodoList;