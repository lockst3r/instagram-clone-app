import {View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/comment';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        className="p-2.5"
      />
    </View>
  );
};

export default CommentsScreen;
