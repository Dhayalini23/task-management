import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private Http:HttpClient) { }

  getTask(){
    return this.Http.get<Task[]>('http://localhost:5198/api/TaskItems');
  }
  createTask(task:any){
   return this.Http.post('http://localhost:5198/api/TaskItems',task);
  }
  deleteTask(taskId:number){
    return this.Http.delete('http://localhost:5198/api/TaskItems/'+ taskId);
   }
   updateTask(task:Task,taskId:number){
    return this.Http.put('http://localhost:5198/api/TaskItems/'+ taskId,task);
   }
   getTaskbyId(taskId : number){
    return this.Http.get<Task>('http://localhost:5198/api/TaskItems/' + taskId);
  }
}

export interface Task{
   filter(arg0: (a: any) => any): Task[];
  id:number;
  title:string;
  description:string;
  dueDate:string;
  priority:string;
}
