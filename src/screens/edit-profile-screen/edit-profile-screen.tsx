import {View, Text, Image, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import user from '../../assets/data/user.json';
import {ICustomInput, IEditableUser} from './edit-profile-screen.interfaces';
import {useForm, Controller} from 'react-hook-form';
import classNames from 'classnames';
import {launchImageLibrary, Asset} from 'react-native-image-picker';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const CustomInput: FC<ICustomInput> = ({
  label,
  multiline = false,
  name,
  control,
  rules = {},
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({field: {onBlur, onChange, value}, fieldState: {error}}) => (
      <View className="flex-row items-center self-stretch">
        <Text className="w-[75px]">{label}</Text>
        <View className="flex-1">
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={label}
            className={classNames('border-b-[1px] border-border min-h-[50px]', {
              'border-error': error,
            })}
            multiline={multiline}
          />
          {error && <Text className="text-error">{error.type}</Text>}
        </View>
      </View>
    )}
  />
);

const validateUsername = async (username: string) => {};

const EditProfileScreen: FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Asset | null>(null);
  const {control, handleSubmit} = useForm<IEditableUser>();

  const onSubmit = (data: IEditableUser) => {
    console.warn(data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorMessage, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View className="items-center p-2.5">
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        className="w-[30%] aspect-square rounded-full"
      />
      <Text
        onPress={onChangePhoto}
        className="text-primary text-md font-bold m-2.5">
        Change profile page
      </Text>
      <CustomInput
        name="name"
        label="Name"
        control={control}
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        name="username"
        label="Username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 character',
          },
          validate: validateUsername,
        }}
      />
      <CustomInput
        name="website"
        label="Website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Invalid url',
          },
        }}
      />
      <CustomInput
        name="bio"
        label="Bio"
        multiline
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 character',
          },
        }}
      />

      <Text
        onPress={handleSubmit(onSubmit)}
        className="text-primary text-md font-bold m-2.5">
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
