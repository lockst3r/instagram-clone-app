import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {IButton} from './button.interfaces';

const Button: FC<IButton> = ({onPress, text}) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center border-[1px] border-border rounded-[5px] p-1.5 m-1.5">
      <Text className="font-bold">{text}</Text>
    </Pressable>
  );
};

export default Button;
