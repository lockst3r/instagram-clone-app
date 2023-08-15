import {Image, FlatList} from 'react-native';
import React, {FC} from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './profile-header';
import FeedGridView from '../../components/feed-grid-view/feed-grid-view';

const ProfileScreen: FC = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
