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
import { BabyHeightService } from './babyHeight.service';
import { BabyHeight } from '../../models/BabyHeight.entity';
import { AuthGuard } from '@nestjs/passport';
import { BabyHeightDTO } from 'src/interfaces/BabyHeight.dto';

@Controller('babyHeight')
export class BabyHeightController {
  constructor(private readonly babyHeightService: BabyHeightService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createBabyHeight(@Body() BabyHeight: BabyHeightDTO): Promise<BabyHeight> {
    return this.babyHeightService.createBabyHeight(BabyHeight);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getAllBabyHeightByBabyId(
    @Param('id') id: number,
  ): Promise<BabyHeight[] | undefined> {
    return this.babyHeightService.getAllBabyHeightByBabyId(id);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateBabyHeight(@Body() BabyHeight: BabyHeight): Promise<BabyHeight> {
    return this.babyHeightService.updateBabyHeight(BabyHeight);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteBabyHeight(@Param('id') id: number): Promise<void> {
    return this.babyHeightService.deleteBabyHeight(id);
  }
}
