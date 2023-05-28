import { Module } from '@nestjs/common';
import { BabyActivityController } from './babyactivity.controller';
import { BabyActivityService } from './babyactivity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyActivity } from '../../models/babyActivity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BabyActivity])],
  controllers: [BabyActivityController],
  providers: [BabyActivityService],
})
export class BabyactivityModule {}
