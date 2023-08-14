import {View} from 'react-native';
import React, {FC} from 'react';
import HomeScreen from './src/screens/home-screen/home-screen';
import CommentsScreen from './src/screens/comments-screen/comments-screen';

const App: FC = () => {
  return (
    <View className="flex-1">
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

export default App;
