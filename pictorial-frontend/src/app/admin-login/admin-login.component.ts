import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin=new Admin();

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.admin);
    this.adminService.checkAdmin(this.admin).subscribe(data=>{
      alert("login successful");
      this.router.navigate(['admin/users']);
    },error=>alert("incorrect credentials"));
  }
}
