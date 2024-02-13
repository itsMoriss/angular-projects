import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../shared/toast.service';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

  showValidationErrors!: boolean;

  constructor(private todoService: TodoService, private router: Router, private toastService: ToastService) { }

  onFormSubmit(form: NgForm) {

    if (form.invalid) {
      this.showValidationErrors = true;
      this.toastService.showError('Please fix the validation errors')
      return undefined;
    }

    const todo = new Todo(form.value.text);
    this.todoService.addTodo(todo);
    this.router.navigateByUrl('/todos');
  }

}
