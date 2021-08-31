import {
  // ref
  LegacyRef,
  // events
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';

/**
 * @description 输入框-输入类型
 */
export type inputTypes = 'text' | 'textarea' | 'password' | undefined;
/**
 * @description 输入框-内容的对齐方式
 */
export type alignTypes = 'left' | 'right' | 'top' | 'middle' | 'bottom';
/**
 * @description 输入框-大小类型
 */
export type sizeTypes = 'default' | 'large' | 'small';
/**
 * @description 输入框-的接口
 */
export interface IInputProps {
  ref?: LegacyRef<HTMLInputElement>;
  // properties
  className?: string;
  value?: string;
  placeholder?: string;
  size?: sizeTypes;
  height?: number; // h + 'px'
  width?: number; // w + 'px'
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  formNoValidate?: boolean;
  type?: inputTypes;
  password?: boolean;
  // events
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}