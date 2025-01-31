import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { PostStatus } from './enums/post-status.enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'enum', enum: PostType })
  postType: PostType;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'enum', enum: PostStatus })
  status: PostStatus;

  @Column({ type: 'text', nullable: true })
  content?: string;
}
