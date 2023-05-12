import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BabyProfileService } from './babyprofile.service';
import { BabyProfile } from '../../models/babyProfile.entity';

@Controller('babyprofiles')
export class BabyProfileController {
  constructor(private readonly babyProfileService: BabyProfileService) {}

  @Post()
  createBabyProfile(@Body() babyProfile: BabyProfile): Promise<BabyProfile> {
    return this.babyProfileService.createBabyProfile(babyProfile);
  }

  @Get(':id')
  getBabyProfileById(
    @Param('id') id: number,
  ): Promise<BabyProfile | undefined> {
    return this.babyProfileService.getBabyProfileById(id);
  }

  @Put(':id')
  updateBabyProfile(
    @Param('id') id: number,
    @Body() babyProfile: BabyProfile,
  ): Promise<BabyProfile> {
    babyProfile.id = id;
    return this.babyProfileService.updateBabyProfile(babyProfile);
  }

  @Delete(':id')
  deleteBabyProfile(@Param('id') id: number): Promise<void> {
    return this.babyProfileService.deleteBabyProfile(id);
  }
}
