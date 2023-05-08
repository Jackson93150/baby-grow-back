import { Module } from '@nestjs/common';
import { GrowthController } from './growth.controller';
import { GrowthService } from './growth.service';

@Module({
  controllers: [GrowthController],
  providers: [GrowthService],
})
export class GrowthModule {}
