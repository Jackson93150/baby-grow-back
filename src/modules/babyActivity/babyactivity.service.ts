import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BabyActivity } from '../../models/babyactivity.entity';

@Injectable()
export class BabyActivityService {
  constructor(
    @InjectRepository(BabyActivity)
    private readonly babyActivityRepository: Repository<BabyActivity>,
  ) {}

  async createBabyActivity(babyActivity: BabyActivity): Promise<BabyActivity> {
    return this.babyActivityRepository.save(babyActivity);
  }

  async getBabyActivityById(id: number): Promise<BabyActivity | undefined> {
    return this.babyActivityRepository.findOne({ where: { id } });
  }

  async updateBabyActivity(babyActivity: BabyActivity): Promise<BabyActivity> {
    return this.babyActivityRepository.save(babyActivity);
  }

  async deleteBabyActivity(id: number): Promise<void> {
    await this.babyActivityRepository.delete(id);
  }
}
