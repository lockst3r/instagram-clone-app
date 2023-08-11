import {FlatList} from 'react-native';
import React, {FC} from 'react';
import FeedPost from '../../components/feed-post';
import posts from '../../assets/data/posts.json';

const HomeScreen: FC = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
