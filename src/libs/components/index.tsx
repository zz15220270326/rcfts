/* @description 组件库 components libs */
import { FC } from 'react';

// components
import Button from './z-button';
import Input from './z-input';

/**
 * @description 全局导出
 */
function MyUI(): { [key: string]: FC } {
  return {
    Button,
    Input
  };
}

export default MyUI;

/**
 * @description 按需导入
 */
export {
  Button,
  Input
};
