import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {

  showValidationErrors!: boolean;

  note!: Note;

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id') ?? '';
      console.log(idParam);

      this.note = this.noteService.getNote(idParam)!;
    })
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) {
      this.showValidationErrors = true;
      return undefined;
    }

    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl("/notes");

    return true;
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
  }

}
