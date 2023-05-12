import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BabyProfile } from '../../models/babyProfile.entity';

@Injectable()
export class BabyProfileService {
  constructor(
    @InjectRepository(BabyProfile)
    private readonly babyProfileRepository: Repository<BabyProfile>,
  ) {}

  async createBabyProfile(babyProfile: BabyProfile): Promise<BabyProfile> {
    return this.babyProfileRepository.save(babyProfile);
  }

  async getBabyProfileById(id: number): Promise<BabyProfile | undefined> {
    return this.babyProfileRepository.findOne({ where: { id } });
  }

  async updateBabyProfile(babyProfile: BabyProfile): Promise<BabyProfile> {
    return this.babyProfileRepository.save(babyProfile);
  }

  async deleteBabyProfile(id: number): Promise<void> {
    await this.babyProfileRepository.delete(id);
  }
}
