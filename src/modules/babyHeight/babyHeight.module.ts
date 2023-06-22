import { Module } from '@nestjs/common';
import { BabyHeightController } from './babyHeight.controller';
import { BabyHeightService } from './babyHeight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BabyHeight } from 'src/models/BabyHeight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BabyHeight])],
  controllers: [BabyHeightController],
  providers: [BabyHeightService],
})
export class BabyHeightModule {}
