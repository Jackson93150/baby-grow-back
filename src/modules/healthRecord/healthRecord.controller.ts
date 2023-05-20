import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { HealthRecordService } from './healthrecord.service';
import { HealthRecord } from '../../models/healthrecord.entity';

@Controller('healthrecords')
export class HealthRecordController {
  constructor(private readonly healthRecordService: HealthRecordService) {}

  @Post()
  createHealthRecord(
    @Body() healthRecord: HealthRecord,
  ): Promise<HealthRecord> {
    return this.healthRecordService.createHealthRecord(healthRecord);
  }

  @Get(':id')
  getHealthRecordById(
    @Param('id') id: number,
  ): Promise<HealthRecord | undefined> {
    return this.healthRecordService.getHealthRecordById(id);
  }

  @Put(':id')
  updateHealthRecord(
    @Param('id') id: number,
    @Body() healthRecord: HealthRecord,
  ): Promise<HealthRecord> {
    healthRecord.id = id;
    return this.healthRecordService.updateHealthRecord(healthRecord);
  }

  @Delete(':id')
  deleteHealthRecord(@Param('id') id: number): Promise<void> {
    return this.healthRecordService.deleteHealthRecord(id);
  }
}
