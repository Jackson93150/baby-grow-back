import { Module } from '@nestjs/common';
import { BabyactivityController } from './babyactivity.controller';
import { BabyactivityService } from './babyactivity.service';

@Module({
  controllers: [BabyactivityController],
  providers: [BabyactivityService],
})
export class BabyactivityModule {}
