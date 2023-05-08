export interface HealthRecordDTO {
  id: number;
  baby_id: number;
  date_consultation: Date;
  height?: number | null;
  weight?: number | null;
  temperature?: number | null;
  diagnosis?: string | null;
  prescription?: string | null;
}
