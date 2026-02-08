import { LoginService } from './../Service/login.service';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private LoginService: LoginService){

  }
  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.LoginService.login(email,password);
  }
}
