import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaccination } from '../../models/vaccination.entity';

@Injectable()
export class VaccinationService {
  constructor(
    @InjectRepository(Vaccination)
    private readonly vaccinationRepository: Repository<Vaccination>,
  ) {}

  async createVaccination(vaccination: Vaccination): Promise<Vaccination> {
    return this.vaccinationRepository.save(vaccination);
  }

  async getVaccinationById(id: number): Promise<Vaccination | undefined> {
    return this.vaccinationRepository.findOne({ where: { id } });
  }

  async updateVaccination(vaccination: Vaccination): Promise<Vaccination> {
    return this.vaccinationRepository.save(vaccination);
  }

  async deleteVaccination(id: number): Promise<void> {
    await this.vaccinationRepository.delete(id);
  }
}
