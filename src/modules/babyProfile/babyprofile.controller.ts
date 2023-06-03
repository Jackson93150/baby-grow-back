import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { BabyProfileService } from './babyprofile.service';
import { BabyProfile } from '../../models/babyProfile.entity';
import { BabyProfileDTO } from 'src/interfaces/babyProfile.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('babyprofiles')
export class BabyProfileController {
  constructor(private readonly babyProfileService: BabyProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createBabyProfile(
    @Body() babyProfile: BabyProfileDTO,
    @Request() req: any,
  ): Promise<BabyProfile> {
    const loggedInUser = req.user;
    return this.babyProfileService.createBabyProfile(babyProfile, loggedInUser);
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  getBabyProfileByUserId(
    @Request() req: any,
  ): Promise<BabyProfile | undefined> {
    const loggedInUser = req.user;
    return this.babyProfileService.getBabyProfileByUserId(loggedInUser.id);
  }

  @Get('users')
  @UseGuards(AuthGuard('jwt'))
  getAllBabyProfileByUserId(
    @Request() req: any,
  ): Promise<BabyProfile[] | undefined> {
    const loggedInUser = req.user;
    return this.babyProfileService.getAllBabyProfileByUserId(loggedInUser.id);
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
