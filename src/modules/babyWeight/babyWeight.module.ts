import { Module } from '@nestjs/common';
import { BabyWeightController } from './babyWeight.controller';
import { BabyWeightService } from './babyWeight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyWeight } from 'src/models/BabyWeight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BabyWeight])],
  controllers: [BabyWeightController],
  providers: [BabyWeightService],
})
export class BabyWeightModule {}
