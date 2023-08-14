import React, {FC, useCallback} from 'react';
import Video from 'react-native-video';
import {IVideoPlayer} from './video-player.interfaces';
import {useBoolean} from '../../hooks/useBoolean';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VideoPlayer: FC<IVideoPlayer> = ({uri, paused}) => {
  const [isMuted, {toggle}] = useBoolean(true);

  const toggleMute = useCallback(() => toggle(), [toggle]);

  return (
    <View>
      <Video
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
        }}
        style={{width: '100%', aspectRatio: 1}}
        muted={isMuted}
        resizeMode="cover"
        repeat
        paused={paused}
      />
      <Pressable
        onPress={toggleMute}
        className="bg-black p-1.5 absolute bottom-2.5 right-2.5 rounded-full">
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
