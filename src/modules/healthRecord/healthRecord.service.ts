import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthRecord } from '../../models/healthrecord.entity';

@Injectable()
export class HealthRecordService {
  constructor(
    @InjectRepository(HealthRecord)
    private readonly healthRecordRepository: Repository<HealthRecord>,
  ) {}

  async createHealthRecord(healthRecord: HealthRecord): Promise<HealthRecord> {
    return this.healthRecordRepository.save(healthRecord);
  }

  async getHealthRecordById(id: number): Promise<HealthRecord | undefined> {
    return this.healthRecordRepository.findOne({ where: { id } });
  }

  async updateHealthRecord(healthRecord: HealthRecord): Promise<HealthRecord> {
    return this.healthRecordRepository.save(healthRecord);
  }

  async deleteHealthRecord(id: number): Promise<void> {
    await this.healthRecordRepository.delete(id);
  }
}
