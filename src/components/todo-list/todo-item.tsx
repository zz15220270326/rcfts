import React, { FC, CSSProperties, useMemo } from 'react';
// ? components
import { Button } from '../../libs/components';

import { getExactTime } from '../../libs/utils';
import { ITodoItem } from '../../typings';

interface ITodoItemProps {
  todoItem: ITodoItem;
  toggleTodoItem: (id: number) => void;
  removeTodoItem: (id: number) => void;
}

const TodoItem: FC<ITodoItemProps> = ({ todoItem, toggleTodoItem, removeTodoItem }) => {
  const statusText = useMemo<string>(() => {
    return todoItem.toggled ? '已实现' : '待办中';
  }, [todoItem.toggled]),
    todoStyle = useMemo<CSSProperties>(() => ({
      textDecoration: todoItem.toggled ? 'line-through' : 'none'
    }), [todoItem.toggled]);

  return (
    <div className="todo-item" style={ todoStyle }>
      <span className="todo-item-info">
        内容: { todoItem.content }
      </span>
      <span className="todo-item-info">
        <span>
          状态: { statusText }
        </span>
      </span>
      <span className="todo-item-info">
        创建时间: { getExactTime(todoItem.id) }
      </span>
      <Button
        type="warning"
        size="small"
        disabled={ todoItem.toggled }
        onClick={ () => toggleTodoItem(todoItem.id) }
      >
        修改状态
      </Button>
      <Button
        type="danger"
        size="small"
        onClick={ () => removeTodoItem(todoItem.id) }
      >
        删除该项
      </Button>
    </div>
  );
};

export default TodoItem;