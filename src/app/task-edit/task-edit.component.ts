import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  taskId: number
  taskForm: any;
  CurrentTask: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService,
    private fb: FormBuilder, private toastr: ToastrService, private router: Router
  ) {
    const tid = this.route.snapshot.paramMap.get('id');
    this.taskId = Number(tid);

    this.taskForm = this.fb.group({
      id: ['', []],
      title: ['', []],
      description: ['', []],
      dueDate: ['', []],
      priority: ['', []]
    })

  }

  ngOnInit(): void {
    console.log(this.taskId)
    this.taskService.getTaskbyId(this.taskId).subscribe(data => {
      console.log(data);
       data.dueDate = new Date(data.dueDate).toISOString().slice(0, 10);
       this.taskForm.patchValue(data);
    
    });
  }

  onSubmit() {
    const task = this.taskForm.value;

    this.taskService.updateTask(task, this.taskId).subscribe(data => {
      this.toastr.success("Task is updated successfully");
      this.router.navigate(["/"]);
    })
  }
  onEdit() {
    this.router.navigate(['/edit', this.taskId]);
  }

  onCancel() {

  }
}
