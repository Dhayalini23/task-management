import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../user.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  title = 'UserManagement';

  users: User[] = [];
  searchText: any;
  constructor(private userService: UserService, private toastr: ToastrService, private router:Router) {
    console.log("test");

  }

  ngOnInit(): void {
    this.loadUsers();
  }

  close() { }
  onDelete(userId: number) {

    if (confirm("Do you want to delete this user?")) {
      this.userService.deleteUser(userId).subscribe(data => {
      this.toastr.success('Task is deleted',"Deleted",{
        timeOut:10000,
        closeButton:true
      });
        this.loadUsers();
        
      });
    }
  }
  loadUsers(){

    this.userService.getUser().subscribe(data =>{
      console.log(data)
      this.users = data;
    })
  }

  onEdit(userid:number){
    console.log(userid);
    this.router.navigate(['/edit',userid])
  }
}