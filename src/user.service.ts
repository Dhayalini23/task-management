import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) {
   }
   getUser(){
    return this.Http.get<User[]>('http://localhost:5198/api/Users');
  }
  createUser(user:any){
    return this.Http.post('http://localhost:5198/api/Users',user);
   }
  deleteUser(userId:number){
    return this.Http.delete('http://localhost:5198/api/Users/'+ userId);
   }
   updateUser(user:User,userId:number){
    return this.Http.put('http://localhost:5198/api/Users/'+ userId,user);
   }
   getUserById(userId : number){
    return this.Http.get<User>('http://localhost:5198/api/Users/' + userId);
  }
}


export interface User{
  filter(arg0: (a: any) => any): User[];
 id:number;
 name:string;
 email:string;
 password:string;
 phone:string;
 address?:Address;
//  address:string;
}

export interface Address{
  id:number;
  addressLine1:string;
  addressLine2:string;
  city:string;
}