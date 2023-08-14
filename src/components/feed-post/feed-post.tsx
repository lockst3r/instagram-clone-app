import {View, Text, Image, Pressable} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesin from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Comment from '../comment';
import {IFeedPost} from './feed-post.interfaces';
import {useBoolean} from '../../hooks/useBoolean';
import DoublePress from '../double-press';
import Carousel from '../carousel/carousel';
import VideoPlayer from '../video-player';

const FeedPost: FC<IFeedPost> = ({post, isVisible}) => {
  const [isDescriptionExpanded, {toggle}] = useBoolean(false);
  const [isLike, setIsLike] = useState(false);

  const toggleDescriptioExpanded = useCallback(() => {
    toggle();
  }, [toggle]);

  const toggleLike = useCallback(() => {
    setIsLike(prev => !prev);
  }, []);

  let content = null;
  if (post.image) {
    content = (
      <DoublePress onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          className="w-full aspect-square"
        />
      </DoublePress>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePress onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePress>
    );
  }

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

      {content}

      <View className="p-2.5">
        <View className="flex-row mb-1.5">
          <Pressable onPress={toggleLike}>
            <AntDesin
              name={isLike ? 'heart' : 'hearto'}
              size={24}
              style={{marginHorizontal: 5}}
              color={isLike ? '#ED4956' : '#000'}
            />
          </Pressable>
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

        <Text
          className="leading-[18px]"
          numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text className="font-bold">{post.user.username}</Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptioExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
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
