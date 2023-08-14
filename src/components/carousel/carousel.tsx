import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {ICarousel} from './carousel.interfaces';
import classNames from 'classnames';
import DoublePress from '../double-press/double-press';

const Carousel: FC<ICarousel> = ({images, onDoublePress = () => {}}) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePress onDoublePress={onDoublePress}>
            <Image
              source={{uri: item}}
              className="aspect-square"
              style={{width}}
            />
          </DoublePress>
        )}
        horizontal
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        showsHorizontalScrollIndicator={false}
      />
      <View className="flex-row justify-center absolute bottom-0 w-full">
        {images.map((_, index) => (
          <View
            key={index}
            className={classNames(
              'w-2.5 aspect-square rounded-full bg-white mx-1.5 my-2.5',
              {
                'bg-primary': index === activeImageIndex,
              },
            )}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
