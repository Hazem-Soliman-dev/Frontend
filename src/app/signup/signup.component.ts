import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    userType:''
  };
  constructor(private Auth:SignupService,private router:Router) { }
  onSubmit(data:NgForm){
    if (data.valid) {
    this.Auth.createUser(data.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })}
    else {
      console.log('Form is invalid');
    }
  }
}
