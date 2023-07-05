import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  UserDetails(id: number){
    this.router.navigate(['admin/user-details/', id]);
  }

  updateUser(id: number){
    this.router.navigate(['admin/update-user/', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

}
