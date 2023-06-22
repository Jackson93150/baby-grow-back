import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BabyWeightDTO } from 'src/interfaces/BabyWeight.dto';
import { BabyWeight } from 'src/models/BabyWeight.entity';

@Injectable()
export class BabyWeightService {
  constructor(
    @InjectRepository(BabyWeight)
    private readonly babyWeightRepository: Repository<BabyWeight>,
  ) {}

  async createBabyWeight(BabyWeight: BabyWeightDTO): Promise<BabyWeight> {
    return this.babyWeightRepository.save(BabyWeight);
  }

  async getBabyWeightById(id: number): Promise<BabyWeight | undefined> {
    return this.babyWeightRepository.findOne({ where: { id } });
  }

  async getAllBabyWeightByBabyId(
    id: number,
  ): Promise<BabyWeight[] | undefined> {
    return this.babyWeightRepository.find({
      where: { baby_id: id },
      order: { month: 'ASC' },
    });
  }

  async updateBabyWeight(BabyWeight: BabyWeight): Promise<BabyWeight> {
    return this.babyWeightRepository.save(BabyWeight);
  }

  async deleteBabyWeight(id: number): Promise<void> {
    await this.babyWeightRepository.delete(id);
  }
}
