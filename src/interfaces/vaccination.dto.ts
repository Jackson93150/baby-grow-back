export interface VaccinationDTO {
  baby_id: number;
  vaccine_name: string;
  current_dose: number;
  dose: number;
  date_administered?: Date | null;
  next_due_date?: Date | null;
}
