import React, { FC } from 'react';
import { IModalProps } from './typings';

const Modal: FC<IModalProps> = (props) => {
  const {
    // properties
    // evemts
    // children
    children
  } = props;

  return (
    <>
      <div className="zz-modal-mask" />
      <div
        className={ `zz-modal-wrapper` }
      >
        { children }
      </div>
    </>
  );
};

export default Modal;