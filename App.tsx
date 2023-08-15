import {View} from 'react-native';
import React, {FC} from 'react';
import HomeScreen from './src/screens/home-screen';
import CommentsScreen from './src/screens/comments-screen';
import ProfileScreen from './src/screens/profile-screen';
import EditProfileScreen from './src/screens/edit-profile-screen';


const App: FC = () => {
  return (
    <View className="flex-1">
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
    {/*   <ProfileScreen /> */}
      <EditProfileScreen />
    </View>
  );
};

export default App;
