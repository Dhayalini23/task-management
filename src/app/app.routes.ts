import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

export const routes: Routes = [
   {path : 'task-list' , component : TaskListComponent},
   {path : 'add' , component : TaskAddComponent},
   {path: 'edit/:id', component : TaskEditComponent},
   {path: 'user-list', component: UserListComponent},
   {path: 'user-add', component: UserAddComponent}
];

