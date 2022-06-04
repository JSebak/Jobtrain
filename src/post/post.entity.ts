/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {

  @PrimaryColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 250 })
  post_content: string;

  @Column('int')
  user_id: number;

  @Column()
  creation_date: Date;

  @Column()
  modification_date: Date|null;

}
