import { Routes, } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

export const routes: Routes = [
    { path: 'bookmarks', component: BookmarksComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'notes/add', component: AddNotesComponent},
    { path: 'notes/:id', component: EditNoteComponent},
];
