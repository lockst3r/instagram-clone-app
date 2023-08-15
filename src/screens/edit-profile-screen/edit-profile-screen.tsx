import {View, Text, Image, TextInput} from 'react-native';
import React, {FC} from 'react';
import user from '../../assets/data/user.json';
import {ICustomInput} from './edit-profile-screen.interfaces';

const CustomInput: FC<ICustomInput> = ({label, multiline = false}) => (
  <View className="flex-row items-center self-stretch">
    <Text className="w-[75px]">{label}</Text>
    <TextInput
      placeholder={label}
      className="border-b-[1px] border-border"
      multiline={multiline}
    />
  </View>
);

const EditProfileScreen = () => {
  return (
    <View className="items-center p-2.5">
      <Image
        source={{uri: user.image}}
        className="w-[30%] aspect-square rounded-full"
      />
      <Text className="text-primary text-md font-bold m-2.5">
        Change profile page
      </Text>
      <CustomInput label='Name'/>
      <CustomInput label='User Name'/>
      <CustomInput label='Website'/>
      <CustomInput label='Bio' />

      <Text className="text-primary text-md font-bold m-2.5">
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
