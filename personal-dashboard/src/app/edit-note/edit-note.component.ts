import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatTooltipModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {

  showValidationErrors!: boolean;

  note!: Note;

  constructor(
    private route: ActivatedRoute, 
    private noteService: NoteService, 
    private router: Router,
    private toastService: ToastService
  ) { }

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
      //this.toastService.showError('Please fix the validation errors');
      return undefined;
    }

    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl("/notes");
    //this.toastService.showSuccess('Note updated successfully');

    return true;
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
    //this.toastService.showSuccess('Note deleted successfully');
  }

}
