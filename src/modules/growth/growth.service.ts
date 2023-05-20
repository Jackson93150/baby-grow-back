import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Growth } from '../../models/growth.entity';

@Injectable()
export class GrowthService {
  constructor(
    @InjectRepository(Growth)
    private readonly growthRepository: Repository<Growth>,
  ) {}

  async createGrowth(growth: Growth): Promise<Growth> {
    return this.growthRepository.save(growth);
  }

  async getGrowthById(id: number): Promise<Growth | undefined> {
    return this.growthRepository.findOne({ where: { id } });
  }

  async updateGrowth(growth: Growth): Promise<Growth> {
    return this.growthRepository.save(growth);
  }

  async deleteGrowth(id: number): Promise<void> {
    await this.growthRepository.delete(id);
  }
}
