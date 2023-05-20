import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../../models/note.entity';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(@Body() note: Note): Promise<Note> {
    return this.noteService.createNote(note);
  }

  @Get(':id')
  getNoteById(@Param('id') id: number): Promise<Note | undefined> {
    return this.noteService.getNoteById(id);
  }

  @Put(':id')
  updateNote(@Param('id') id: number, @Body() note: Note): Promise<Note> {
    note.id = id;
    return this.noteService.updateNote(note);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
