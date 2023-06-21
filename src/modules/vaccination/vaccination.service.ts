import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Vaccination } from '../../models/vaccination.entity';
import { VaccinationDTO } from 'src/interfaces/vaccination.dto';

@Injectable()
export class VaccinationService {
  constructor(
    @InjectRepository(Vaccination)
    private readonly vaccinationRepository: Repository<Vaccination>,
  ) {}

  async createVaccination(vaccination: VaccinationDTO): Promise<Vaccination> {
    return this.vaccinationRepository.save(vaccination);
  }

  async getVaccinationById(id: number): Promise<Vaccination | undefined> {
    return this.vaccinationRepository.findOne({ where: { id } });
  }

  async getAllVaccinationByBabyId(
    ids: number[],
  ): Promise<Vaccination[] | undefined> {
    return this.vaccinationRepository.find({ where: { baby_id: In(ids) } });
  }

  async updateVaccination(vaccination: Vaccination): Promise<Vaccination> {
    return this.vaccinationRepository.save(vaccination);
  }

  async deleteVaccination(id: number): Promise<void> {
    await this.vaccinationRepository.delete(id);
  }
}
