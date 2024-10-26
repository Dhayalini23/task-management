import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task.service';

@Pipe({
  name: 'filtertask',
  standalone: true
})
export class FiltertaskPipe implements PipeTransform {

  transform(value: Task, ...args: string[]): Task[] {
   let searchText = args[0];
   return value.filter(a =>a.title.toLowerCase().include(searchText.toLowerCase())|| a.description.toLowerCase().include(searchText.toLowerCase));
  }

}
