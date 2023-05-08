export interface GrowthDTO {
  id: number;
  baby_id: number;
  measurement_date: Date;
  height?: number | null;
  weight?: number | null;
  head_circumference?: number | null;
}
