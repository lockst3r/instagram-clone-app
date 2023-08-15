import {View} from 'react-native';
import React, {FC} from 'react';
import HomeScreen from './src/screens/home-screen/home-screen';
import CommentsScreen from './src/screens/comments-screen/comments-screen';
import ProfileScreen from './src/screens/profile-screen/profile-screen';

const App: FC = () => {
  return (
    <View className="flex-1">
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      <ProfileScreen />
    </View>
  );
};

export default App;
