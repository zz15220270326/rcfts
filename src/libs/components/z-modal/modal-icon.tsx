import React, { FC } from 'react';

interface IModalIconProps {
  className?: string;
}

const ModalIcon: FC<IModalIconProps> = (props) => {
  const { className } = props;

  return (
    <>
      <a className="zz-modal-close" href="##" prefix="">
        <i className={ className || '' }></i>
      </a>
    </>
  );
};

export default ModalIcon;
