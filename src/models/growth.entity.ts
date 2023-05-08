import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Growth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  baby_id: number;

  @Column()
  measurement_date: Date;

  @Column({ nullable: true })
  height: number | null;

  @Column({ nullable: true })
  weight: number | null;

  @Column({ nullable: true })
  head_circumference: number | null;
}
