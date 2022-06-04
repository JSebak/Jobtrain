/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Post } from './post.entity';

export const postProvider = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];