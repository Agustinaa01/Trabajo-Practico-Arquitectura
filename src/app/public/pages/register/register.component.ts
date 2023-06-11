import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest, iRegisterRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  constructor(private cd:UserService, private router:Router) { }

  //Hecho usando NgModel
  authData:iRegisterRequest = {
    userName: "",
    password: "",
    email: '',
  };

  async register(form:NgForm){
    console.log(form.value);
    const token = await this.cd.addUser(form.value);
    if(token) this.router.navigate(['/login']);
  }
}
