import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule , RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  title = 'TaskManagement';

  tasks:any[]=[];
  constructor(private taskService:TaskService){
console.log("test");

  }

  ngOnInit():void{
    this.taskService.getTask().subscribe(data=>{this.tasks=data ; console.log(this.tasks)}
  
    );
   
  }
}
