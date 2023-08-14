import {View, Text, Image, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState<string>('');
  const onPost = useCallback(() => {}, []);

  return (
    <View className="flex-row p-1.5 border-y-1 border-border items-end">
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        className="w-10 aspect-square rounded-full"
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Write your comment..."
        className="flex-1 border-border border-1 rounded-3xl py-1.5 px-2.5 ml-1.5 pr-12"
        multiline
      />
      <Text
        onPress={onPost}
        className="absolute right-4 bottom-4 text-sm font-extrabold text-primary">
        POST
      </Text>
    </View>
  );
};

export default Input;
