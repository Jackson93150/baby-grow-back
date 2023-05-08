export interface NoteDTO {
  id: number;
  user_id: number;
  title: string;
  content?: string | null;
  created_at?: Date;
}
