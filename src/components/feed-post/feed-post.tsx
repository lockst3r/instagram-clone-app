import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesin from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Comment from '../comment';
import {IFeedPost} from './feed-post.interfaces';

const FeedPost: FC<IFeedPost> = ({post}) => {
  return (
    <View className="flex-1 mt-10">
      <View className="flex-row items-center p-2.5">
        <Image
          source={{
            uri: post.user.image,
          }}
          className="w-[50px] h-[50px] rounded-full mr-2.5"
        />
        <Text className="font-bold text-black">{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={{marginLeft: 'auto'}}
        />
      </View>

      <Image
        source={{
          uri: post.image,
        }}
        className="w-full aspect-square"
      />
      <View className="p-2.5">
        <View className="flex-row mb-1.5">
          <AntDesin name={'hearto'} size={24} style={{marginHorizontal: 5}} />
          <Ionicons
            name={'chatbubble-outline'}
            size={24}
            style={{marginHorizontal: 5}}
          />
          <Feather name={'send'} size={24} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>

        <Text>
          Liked by <Text className="font-bold">Loh</Text> and{' '}
          <Text className="font-bold">{post.nofLikes} others</Text>
        </Text>

        <Text className="leading-[18px]">
          <Text className="font-bold">{post.user.username}</Text>
          {post.description}
        </Text>

        <Text className="text-grey">View all {post.nofComments} comments</Text>

        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <Text className="text-grey">{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
