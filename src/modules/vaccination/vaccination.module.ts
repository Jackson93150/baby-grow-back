import { Module } from '@nestjs/common';
import { VaccinationController } from './vaccination.controller';
import { VaccinationService } from './vaccination.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaccination } from '../../models/vaccination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vaccination])],
  controllers: [VaccinationController],
  providers: [VaccinationService],
})
export class VaccinationModule {}
