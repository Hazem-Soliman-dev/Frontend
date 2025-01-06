import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private _authS:AuthService,private _router:Router){}

  login(loginForm:NgForm){
    this._authS.login(loginForm.value).subscribe(
     {
      next : ()=> {this._router.navigate(['/dashboard'])
        console.log(this._authS.decodeAccessToken())
      },
      error: (err)=> console.log(err.message)
     }
    )
console.log(loginForm.value);

  }
}
