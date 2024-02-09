import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

  showValidationErrors!: boolean;

  onFormSubmit(form: NgForm) {

    if (form.invalid) {
      this.showValidationErrors = true;
      //this.toastService.showError('Please fix the validation errors')
      return undefined;
    }

    // const note = new Note(form.value.title, form.value.content);
    // console.log(note);

    // this.notesService.addNote(note);
    // this.router.navigateByUrl('/notes');
    //this.toastService.showSuccess('Note added successfully');

    return true;
  }

}
