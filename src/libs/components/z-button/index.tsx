import React, { FC } from 'react';
import './index.scss';

import {
  IButtonProps,
  BUTTON_TYPES,
  BUTTON_SIZES
} from './typings';

const Button: FC<IButtonProps> = (props) => {
  const {
    type = BUTTON_TYPES.DEFAULT,
    size = BUTTON_SIZES.DEFAULT,
    disabled = false,
    className = '',

    onClick = undefined,
    
    children
  } = props;

  return (
    <>
      <button
        className={ `zz-btn btn-${type} btn-${size} ${className}` }
        disabled={ disabled }
        onClick={ onClick }
      >
        {/* 直接插入按钮的文字或元素(原生, 自定义组件) */}
        {
          children ? children : ''
        }
      </button>
    </>
  );
}


export default Button;
