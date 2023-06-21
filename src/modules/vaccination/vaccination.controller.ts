import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { Vaccination } from '../../models/vaccination.entity';
import { AuthGuard } from '@nestjs/passport';
import { VaccinationDTO } from 'src/interfaces/vaccination.dto';

@Controller('vaccinations')
export class VaccinationController {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createVaccination(@Body() vaccination: VaccinationDTO): Promise<Vaccination> {
    return this.vaccinationService.createVaccination(vaccination);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getAllVaccinationByBabyId(
    @Param() ids: number[],
  ): Promise<Vaccination[] | undefined> {
    return this.vaccinationService.getAllVaccinationByBabyId(ids);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateVaccination(@Body() vaccination: Vaccination): Promise<Vaccination> {
    return this.vaccinationService.updateVaccination(vaccination);
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  deleteVaccination(@Body('id') id: number): Promise<void> {
    return this.vaccinationService.deleteVaccination(id);
  }
}
