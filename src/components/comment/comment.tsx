import React, {FC, useCallback} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AntDesin from 'react-native-vector-icons/AntDesign';
import {ICommentProps} from './comment.interfaces';
import {useBoolean} from '../../hooks/useBoolean';

const Comment: FC<ICommentProps> = ({comment, includeDetails = false}) => {
  const [isLiked, {toggle}] = useBoolean(false);
  const toggleLike = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <View className="flex-row items-center mb-2.5">
      {includeDetails && (
        <Image
          source={{uri: comment?.user?.image}}
          className="w-10 aspect-square rounded-full mx-1.5"
        />
      )}

      <View className="flex-1">
        <Text className="leading-[18px]">
          <Text className="font-bold">{comment?.user?.username}</Text>{' '}
          {comment?.comment}
        </Text>
        {includeDetails && (
          <View className="flex-row mb-2.5">
            <Text className="mr-1.5 text-grey">2d</Text>
            <Text className="mr-1.5 text-grey">5 likes</Text>
            <Text className="mr-1.5 text-grey">Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesin
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={{marginHorizontal: 5}}
          color={isLiked ? '#ED4956' : '#000'}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
