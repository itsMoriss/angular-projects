import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('First Note', 'This is the body of the **first** note.'),
    new Note('Second Note', 'This is the body of the **second** note.'),
  ];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find(n => n.id === id) //return true when n.id equals the id passed into this method
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id);
    if (note) {
      Object.assign(note, updatedFields);
    }
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex == -1) return;
  
    this.notes.splice(noteIndex, 1);
  }
}
