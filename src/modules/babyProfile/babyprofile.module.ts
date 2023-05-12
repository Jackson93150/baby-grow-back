import { Module } from '@nestjs/common';
import { BabyProfileController } from './babyprofile.controller';
import { BabyProfileService } from './babyprofile.service';

@Module({
  controllers: [BabyProfileController],
  providers: [BabyProfileService],
})
export class BabyprofileModule {}
