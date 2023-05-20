import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from '../../models/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async createNote(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  async getNoteById(id: number): Promise<Note | undefined> {
    return this.noteRepository.findOne({ where: { id } });
  }

  async updateNote(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  async deleteNote(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }
}
