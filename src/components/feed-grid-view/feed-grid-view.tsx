import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {IFeelGridView} from './feed-grid-view.interfaces';
import FeedGridItem from './feed-grid-item';

const FeedGridView: FC<IFeelGridView> = ({data, ListHeaderComponent}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem item={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      className="mx-[-1px]"
    />
  );
};

export default FeedGridView;
