import React from 'react';

export enum BUTTON_TYPES {
  DEFAULT = 'default',
  SUCCESS = 'success',
  PRIMARY = 'primary',
  WARNING = 'warning',
  DANGER = 'danger',
}
export type btnTypes = 'default' | 'success' | 'primary' | 'warning' | 'danger' | '';

export enum BUTTON_SIZES {
  DEFAULT = 'default',
  LARGE = 'large',
  SMALL = 'small'
}
export type btnSizes = 'default' | 'large' | 'small';

export interface IButtonProps {
  className?: string;
  size?: btnSizes;
  type?: btnTypes;
  loading?: boolean;
  disabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
