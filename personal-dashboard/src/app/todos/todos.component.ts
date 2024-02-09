import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todos!: Todo[];

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoservice.getTodos();
  }

  toggleCompleted(todo: Todo) {
    this.todoservice.updateTodo(todo.id, {completed: !todo.completed});
  }

}