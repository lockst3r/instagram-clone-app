import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {IFeedGridItem} from './feed-grid-view.interfaces';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedGridItem: FC<IFeedGridItem> = ({item}) => {
  return (
    <View className="flex-1 p-[1px] aspect-square max-w-[33.333%]">
      <Image source={{uri: item.image || item.images[0]}} className="flex-1" />
      {item.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={'white'}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
