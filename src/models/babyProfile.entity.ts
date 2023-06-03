import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BabyProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  user_id: number;

  @Column()
  gender: string;

  @Column()
  date_of_birth: string;

  @Column()
  relationship: string;

  @Column()
  bloodtype: string;
}
