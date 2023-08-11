import {View} from 'react-native';
import React, {FC} from 'react';
import HomeScreen from './src/screens/home-screen/home-screen';

const App: FC = () => {
  return (
    <View className="flex-1">
      <HomeScreen />
    </View>
  );
};

export default App;
