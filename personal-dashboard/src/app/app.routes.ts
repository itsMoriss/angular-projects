import { Routes, } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

export const routes: Routes = [
    { path: 'bookmarks', component: BookmarksComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'todos/add', component: AddTodoComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'notes/add', component: AddNotesComponent},
    { path: 'notes/:id', component: EditNoteComponent},
];
