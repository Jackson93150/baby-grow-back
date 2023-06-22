import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { BabyWeightService } from './babyWeight.service';
import { BabyWeight } from '../../models/BabyWeight.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('babyweight')
export class BabyWeightController {
  constructor(private readonly babyWeightService: BabyWeightService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createBabyWeight(@Body() BabyWeight: any): Promise<BabyWeight> {
    return this.babyWeightService.createBabyWeight(BabyWeight);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getAllBabyWeightByBabyId(
    @Param('id') id: number,
  ): Promise<BabyWeight[] | undefined> {
    return this.babyWeightService.getAllBabyWeightByBabyId(id);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateBabyWeight(@Body() BabyWeight: BabyWeight): Promise<BabyWeight> {
    return this.babyWeightService.updateBabyWeight(BabyWeight);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteBabyWeight(@Param('id') id: number): Promise<void> {
    return this.babyWeightService.deleteBabyWeight(id);
  }
}
