import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BabyWeight extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    baby_id: number;
  
    @Column()
    month: number;
  
    @Column('decimal', { precision: 5, scale: 1 })
    weight: number;
}
