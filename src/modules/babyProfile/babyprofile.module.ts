import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyProfileController } from './babyprofile.controller';
import { BabyProfileService } from './babyprofile.service';
import { BabyProfile } from '../../models/babyProfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BabyProfile])],
  controllers: [BabyProfileController],
  providers: [BabyProfileService],
})
export class BabyprofileModule {}
