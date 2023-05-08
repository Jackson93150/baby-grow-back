import { Module } from '@nestjs/common';
import { VaccinationController } from './vaccination.controller';
import { VaccinationService } from './vaccination.service';

@Module({
  controllers: [VaccinationController],
  providers: [VaccinationService],
})
export class VaccinationModule {}
