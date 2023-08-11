import {Pressable} from 'react-native';
import React, {FC} from 'react';
import {IDoublePress} from './double-press.interfaces';

const DoublePress: FC<IDoublePress> = ({onDoublePress, children}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePress;
