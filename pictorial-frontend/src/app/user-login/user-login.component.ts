import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 
  user: User=new User();
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  }



  onSubmit(){
    this.userService.checkUser(this.user).subscribe(data=>{
      alert("login successful");
      this.user=data;
      this.router.navigate(['dictionary']);
    },error=>alert("incorrect credentials"));
  }



 
}
