import { Module } from '@nestjs/common';
import { GrowthController } from './growth.controller';
import { GrowthService } from './growth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Growth } from '../../models/growth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Growth])],
  controllers: [GrowthController],
  providers: [GrowthService],
})
export class GrowthModule {}
