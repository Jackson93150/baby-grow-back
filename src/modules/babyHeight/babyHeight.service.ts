import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BabyHeight } from 'src/models/BabyHeight.entity';

@Injectable()
export class BabyHeightService {
  constructor(
    @InjectRepository(BabyHeight)
    private readonly babyHeightRepository: Repository<BabyHeight>,
  ) {}

  async createBabyHeight(BabyHeight: any): Promise<BabyHeight> {
    return this.babyHeightRepository.save(BabyHeight);
  }

  async getBabyHeightById(id: number): Promise<BabyHeight | undefined> {
    return this.babyHeightRepository.findOne({ where: { id } });
  }

  async getAllBabyHeightByBabyId(
    id: number,
  ): Promise<BabyHeight[] | undefined> {
    return this.babyHeightRepository.find({
      where: { baby_id: id },
      order: { month: 'ASC' },
    });
  }

  async updateBabyHeight(BabyHeight: BabyHeight): Promise<BabyHeight> {
    return this.babyHeightRepository.save(BabyHeight);
  }

  async deleteBabyHeight(id: number): Promise<void> {
    await this.babyHeightRepository.delete(id);
  }
}
