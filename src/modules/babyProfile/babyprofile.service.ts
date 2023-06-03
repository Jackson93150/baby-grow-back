import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BabyProfile } from '../../models/babyProfile.entity';
import { BabyProfileDTO } from 'src/interfaces/babyProfile.dto';

@Injectable()
export class BabyProfileService {
  constructor(
    @InjectRepository(BabyProfile)
    private readonly babyProfileRepository: Repository<BabyProfile>,
  ) {}

  async createBabyProfile(
    babyProfile: BabyProfileDTO,
    user: any,
  ): Promise<BabyProfile> {
    const newProfile = {
      first_name: babyProfile.first_name,
      height: babyProfile.height,
      weight: babyProfile.weight,
      user_id: user.id,
      gender: babyProfile.gender,
      date_of_birth: babyProfile.date_of_birth,
      relationship: babyProfile.relationship,
      bloodtype: babyProfile.bloodtype,
    };
    return this.babyProfileRepository.save(newProfile);
  }

  async getBabyProfileByUserId(id: number): Promise<BabyProfile | undefined> {
    return this.babyProfileRepository.findOne({ where: { user_id: id } });
  }

  async getAllBabyProfileByUserId(
    id: number,
  ): Promise<BabyProfile[] | undefined> {
    return this.babyProfileRepository.find({ where: { user_id: id } });
  }

  async updateBabyProfile(babyProfile: BabyProfile): Promise<BabyProfile> {
    return this.babyProfileRepository.save(babyProfile);
  }

  async deleteBabyProfile(id: number): Promise<void> {
    await this.babyProfileRepository.delete(id);
  }
}
