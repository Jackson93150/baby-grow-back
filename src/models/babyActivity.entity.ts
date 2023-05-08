import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BabyActivity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  baby_id: number;

  @Column()
  activity_date: Date;

  @Column()
  activity_type: string;

  @Column({ nullable: true })
  duration_minutes: number | null;

  @Column({ nullable: true })
  notes: string | null;

  @Column({ nullable: true })
  image_url: string | null;
}
