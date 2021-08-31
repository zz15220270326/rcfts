import { useState, useMemo, CSSProperties, SetStateAction } from 'react';

const useModalStyle = (styles: CSSProperties) => {
  const [modalStyle, setModalStyle] = useState<CSSProperties>({});

  const combineStyles: CSSProperties = useMemo(() =>
    Object.assign({}, modalStyle, styles),
    [modalStyle, styles]
  );
  setModalStyle(combineStyles);

  const setCombineStyles = (
    property: SetStateAction<CSSProperties>,
    value: string
  ) => {
    if (property as string in modalStyle) {
    } else {
      throw new Error('style property are not found in current styles!');
    }
  };

  return [combineStyles, setCombineStyles];
}

export {
  useModalStyle
};