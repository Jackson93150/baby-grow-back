import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string | null;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
