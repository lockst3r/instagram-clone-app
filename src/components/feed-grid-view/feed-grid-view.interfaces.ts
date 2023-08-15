import React from 'react';
import {IPost} from '../../types/models';

export interface IFeelGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

export interface IFeedGridItem {
  item: IPost;
}
