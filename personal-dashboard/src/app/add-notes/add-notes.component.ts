import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent {

  showValidationErrors!: boolean;

  constructor(private notesService: NoteService, private router: Router, private toastService: ToastService) { }

  onFormSubmit(form: NgForm) {

    if (form.invalid) {
      this.showValidationErrors = true;
      //this.toastService.showError('Please fix the validation errors')
      return undefined;
    }

    const note = new Note(form.value.title, form.value.content);
    console.log(note);

    this.notesService.addNote(note);
    this.router.navigateByUrl('/notes');
    this.toastService.showSuccess('Note added successfully');

    return true;
  }

}
