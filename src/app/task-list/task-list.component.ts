import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Task, TaskService } from '../task.service';
import { ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})


export class TaskListComponent implements OnInit {
  title = 'TaskManagement';

  tasks: Task[] = [];
  searchText: any;
  constructor(private taskService: TaskService, private toastr: ToastrService, private router:Router) {
    console.log("test");

  }

  ngOnInit(): void {
    this.loadTasks();
  }

  close() { }
  onDelete(taskId: number) {

    if (confirm("Do you want to delete this task?")) {
      this.taskService.deleteTask(taskId).subscribe(data => {
      this.toastr.success('Task is deleted',"Deleted",{
        timeOut:10000,
        closeButton:true
      });
        this.loadTasks();
        
      });
    }
  }
  loadTasks(){
    this.taskService.getTask().subscribe(data =>{
      this.tasks = data;
    })
  }

  // onEdit(taskId:number){
  //   console.log(taskId);
  //   this.router.navigate(['/edit',taskId])
  // }
}



