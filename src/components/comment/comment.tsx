import React, {FC} from 'react';
import {View, Text} from 'react-native';
import AntDesin from 'react-native-vector-icons/AntDesign';
import {ICommentProps} from './comment.interfaces';

const Comment: FC<ICommentProps> = ({comment}) => {
  return (
    <View className="flex-row items-center">
      <Text className="flex-1 leading-[18px]">
        <Text className="font-bold">{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesin name={'hearto'} size={14} style={{marginHorizontal: 5}} />
    </View>
  );
};

export default Comment;
