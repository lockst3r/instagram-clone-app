import {View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/comment';
import Input from './input';

const CommentsScreen = () => {
  return (
    <View className="flex-1">
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        className="p-2.5"
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;
