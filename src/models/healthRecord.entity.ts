import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HealthRecord extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  baby_id: number;

  @Column()
  date_consultation: Date;

  @Column({ nullable: true })
  height: number | null;

  @Column({ nullable: true })
  weight: number | null;

  @Column({ nullable: true })
  temperature: number | null;

  @Column({ nullable: true })
  diagnosis: string | null;

  @Column({ nullable: true })
  prescription: string | null;
}
