import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from "./task-add/task-add.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TaskListComponent, TaskAddComponent , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManagement';

  tasks:any[]=[];
  constructor(private taskService:TaskService){

  }

  ngOnInit():void{
    this.taskService.getTask().subscribe(data=>{this.tasks=data});  
  }
  
}
