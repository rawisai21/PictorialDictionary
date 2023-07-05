import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User=new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.userService.createUser(this.user).subscribe(data=>{
      alert("Registration successful");
      this.router.navigate(['user-login']);
    },error=>alert("User already exists"));
  }
}
