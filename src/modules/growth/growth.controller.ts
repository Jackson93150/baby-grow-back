import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { GrowthService } from './growth.service';
import { Growth } from '../../models/growth.entity';

@Controller('growth')
export class GrowthController {
  constructor(private readonly growthService: GrowthService) {}

  @Post()
  async createGrowth(@Body() growth: Growth): Promise<Growth> {
    return this.growthService.createGrowth(growth);
  }

  @Get(':id')
  async getGrowthById(@Param('id') id: number): Promise<Growth | undefined> {
    return this.growthService.getGrowthById(id);
  }

  @Put(':id')
  async updateGrowth(
    @Param('id') id: number,
    @Body() growth: Growth,
  ): Promise<Growth> {
    growth.id = id;
    return this.growthService.updateGrowth(growth);
  }

  @Delete(':id')
  async deleteGrowth(@Param('id') id: number): Promise<void> {
    return this.growthService.deleteGrowth(id);
  }
}
