import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { Vaccination } from '../../models/vaccination.entity';

@Controller('vaccinations')
export class VaccinationController {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Post()
  createVaccination(@Body() vaccination: Vaccination): Promise<Vaccination> {
    return this.vaccinationService.createVaccination(vaccination);
  }

  @Get(':id')
  getVaccinationById(
    @Param('id') id: number,
  ): Promise<Vaccination | undefined> {
    return this.vaccinationService.getVaccinationById(id);
  }

  @Put(':id')
  updateVaccination(
    @Param('id') id: number,
    @Body() vaccination: Vaccination,
  ): Promise<Vaccination> {
    vaccination.id = id;
    return this.vaccinationService.updateVaccination(vaccination);
  }

  @Delete(':id')
  deleteVaccination(@Param('id') id: number): Promise<void> {
    return this.vaccinationService.deleteVaccination(id);
  }
}
