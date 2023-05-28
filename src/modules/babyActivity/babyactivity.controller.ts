import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BabyActivityService } from './babyactivity.service';
import { BabyActivity } from '../../models/babyActivity.entity';

@Controller('babyactivity')
export class BabyActivityController {
  constructor(private readonly babyActivityService: BabyActivityService) {}

  @Post()
  async createBabyActivity(
    @Body() babyActivity: BabyActivity,
  ): Promise<BabyActivity> {
    return this.babyActivityService.createBabyActivity(babyActivity);
  }

  @Get(':id')
  async getBabyActivityById(
    @Param('id') id: number,
  ): Promise<BabyActivity | undefined> {
    return this.babyActivityService.getBabyActivityById(id);
  }

  @Put(':id')
  async updateBabyActivity(
    @Param('id') id: number,
    @Body() babyActivity: BabyActivity,
  ): Promise<BabyActivity> {
    babyActivity.id = id;
    return this.babyActivityService.updateBabyActivity(babyActivity);
  }

  @Delete(':id')
  async deleteBabyActivity(@Param('id') id: number): Promise<void> {
    return this.babyActivityService.deleteBabyActivity(id);
  }
}
