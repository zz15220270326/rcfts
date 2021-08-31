import React, { FC, useState, useMemo } from 'react';
import './index.scss';

import { IInputProps, inputTypes } from './typings';

const Input: FC<IInputProps> = (props) => {
  const {
    ref = undefined,
    // properties
    className = '',
    value = undefined,
    placeholder = '',
    size = '',
    height = undefined,
    width = undefined,
    maxLength = undefined,
    readOnly = false,
    disabled = false,
    formNoValidate = false,
    type = 'text',
    password = false,
    // events
    onChange = () => {},
    onBlur = () => {}
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const crtType: inputTypes = useMemo(() => {
    if (password) {
      if (isShowPassword) {
        return 'text';
      } else return 'password';
    } else return type;
  }, [password, isShowPassword, type]);

  const crtPwdIcon = useMemo(() =>
    isShowPassword ? 'icon-eye' : 'icon-eve-blind', [isShowPassword]);

  return (
    <>
      <input
        ref={ ref }
        className={
          `zz-input${size.length ? ` size-${size}` : ''}${className}`
        }
        type={ crtType }
        placeholder={ placeholder }
        height={ height }
        width={ width }
        value={ value }
        maxLength={ maxLength }
        readOnly={ readOnly }
        disabled={ disabled }
        formNoValidate={ formNoValidate }
        onChange={ onChange }
        onBlur={ onBlur }
      />
      {/* 表示图标 */}
      {
        password
         ?
         <i
           className={ `iconfont ${crtPwdIcon}` }
           onClick={ () => setIsShowPassword(!isShowPassword) }
         ></i>
         :
         ''
      }
    </>
  );
};

export default Input;