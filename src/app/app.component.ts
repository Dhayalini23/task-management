import { Component } from '@angular/core';
import {RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FiltertaskPipe } from './pipes-task/filtertask.pipe';
import { TaskService } from './task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, RouterModule,FiltertaskPipe,RouterOutlet],
  providers:[TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManagement';

  constructor(){

  }

  ngOnInit():void{
 
  }
  
}
