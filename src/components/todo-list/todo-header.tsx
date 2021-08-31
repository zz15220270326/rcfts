import React, { FC, useRef, useCallback } from 'react';
// ? components
import { Button } from '../../libs/components';

import { getTimestamp } from '../../libs/utils';
import { ITodoItem } from '../../typings';

interface ITodoHeaderProps {
  addTodoItem: (todoItem: ITodoItem) => void;
}

const TodoHeader: FC<ITodoHeaderProps> = ({ addTodoItem }) => {
  const addInputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback(() => {

    const content: string = addInputRef.current ? addInputRef.current.value : '';

    if (!content.length) {
      return;
    }

    const newTodoItem: ITodoItem = {
      id: getTimestamp(),
      content,
      toggled: false
    };

    addTodoItem(newTodoItem);

    addInputRef.current!.value = '';
  }, [addTodoItem])

  return (
    <div className="todo-header">
      <input placeholder="请添加待办项" ref={ addInputRef } />
      <Button
        type="success"
        size="large"
        onClick={ handleAddTodo }
      >
        添加
      </Button>
    </div>
  );
}

export default TodoHeader;
