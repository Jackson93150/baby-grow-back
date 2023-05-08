import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vaccination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  baby_id: number;

  @Column()
  vaccine_name: string;

  @Column({ nullable: true })
  date_administered: Date | null;

  @Column({ nullable: true })
  next_due_date: Date | null;
}
