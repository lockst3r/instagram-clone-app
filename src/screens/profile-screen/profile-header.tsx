import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';

import user from '../../assets/data/user.json';
import Button from '../../components/button';

const ProfileHeader: FC = () => {
  return (
    <View className="p-2.5">
      <View className="flex-row items-center justify-between my-2.5">
        <Image
          source={{uri: user.image}}
          className="w-20 aspect-square rounded-full"
        />
        <View className="items-center">
          <Text className="text-black font-extrabold text-base">98</Text>
          <Text>Posts</Text>
        </View>

        <View className="items-center">
          <Text className="text-black font-extrabold text-base">98</Text>
          <Text>Followers</Text>
        </View>

        <View className="items-center">
          <Text className="text-black font-extrabold text-base">98</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text className="text-black font-extrabold">{user.name}</Text>
      <Text>{user.bio}</Text>

      <View className="flex-row">
        <Button text="Edit profile" onPress={() => {}} />
        <Button text="Other" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileHeader;
