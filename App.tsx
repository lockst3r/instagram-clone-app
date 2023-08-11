import {View} from 'react-native';
import React, {FC} from 'react';
import FeedPost from './src/components/feed-post';

const post = {
  id: '4',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
  ],
};

const App: FC = () => {
  return (
    <View className="flex-1">
      <FeedPost post={post} />
    </View>
  );
};

export default App;
