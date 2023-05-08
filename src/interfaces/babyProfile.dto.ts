export interface BabyProfileDTO {
  id: number;
  first_name: string;
  age: number;
  height?: number | null;
  weight?: number | null;
  user_id: number;
  gender?: string | null;
}
