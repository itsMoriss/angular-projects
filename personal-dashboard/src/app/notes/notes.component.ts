import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterModule, NoteCardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

  notes: Note[] = [];

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  ngOnInit(): void {
    
  }

}
