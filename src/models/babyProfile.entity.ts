import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BabyProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  height: number | null;

  @Column({ nullable: true })
  weight: number | null;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  gender: string | null;
}
