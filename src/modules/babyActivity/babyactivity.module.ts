import { Module } from '@nestjs/common';
import { BabyActivityController } from './babyactivity.controller';
import { BabyActivityService } from './babyactivity.service';

@Module({
  controllers: [BabyActivityController],
  providers: [BabyActivityService],
})
export class BabyactivityModule {}
