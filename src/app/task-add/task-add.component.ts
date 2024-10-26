import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  taskForm:FormGroup;

  constructor(private Fb:FormBuilder, private taskService:TaskService,private router:Router, private toastr:ToastrService){
    this.taskForm=this.Fb.group({
      title:['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:['',[Validators.required]]
    }) 
  }

  ngOnInit(): void {}
  close(){

  }
  onCancel(){
    
  }

  onSubmit(){
    let task=this.taskForm.value;
    console.log(task);
    this.taskService.createTask(task).subscribe(data=>{
      alert("Task is created successfully")

    })
  }
}
