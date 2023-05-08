import { Module } from '@nestjs/common';
import { BabyprofileController } from './babyprofile.controller';
import { BabyprofileService } from './babyprofile.service';

@Module({
  controllers: [BabyprofileController],
  providers: [BabyprofileService],
})
export class BabyprofileModule {}
