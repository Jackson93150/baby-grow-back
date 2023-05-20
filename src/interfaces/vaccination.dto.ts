export interface VaccinationDTO {
  id: number;
  baby_id: number;
  vaccine_name: string;
  date_administered?: Date | null;
  next_due_date?: Date | null;
}