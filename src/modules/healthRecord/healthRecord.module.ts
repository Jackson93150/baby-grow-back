import { Module } from '@nestjs/common';
import { HealthRecordController } from './healthRecord.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthRecordService } from './healthRecord.service';
import { HealthRecord } from '../../models/healthRecord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthRecord])],
  controllers: [HealthRecordController],
  providers: [HealthRecordService],
})
export class HealthRecordModule {}
