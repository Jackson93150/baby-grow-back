export interface BabyActivityDTO {
  id: number;
  baby_id: number;
  activity_date: string;
  activity_type: string;
  duration_minutes?: number | null;
  notes?: string | null;
  image_url?: string | null;
}
