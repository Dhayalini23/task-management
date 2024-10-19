import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private Http:HttpClient) { }

  getTask(){
    return this.Http.get<any[]>('http://localhost:5198/api/TaskItems');
  }
}
