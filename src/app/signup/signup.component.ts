import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  change(form:NgForm){
//     const value = form.value;
//     value.username='ali ali ali'

// form.setValue(value)

form.form.patchValue({email:'ali@ali.com'})
console.log(form.value)
  }
  postData(form:NgForm){
    if(form.valid){
      console.log('valid');
      
    }
    else
    {
      console.log('invalid');
    }
    console.log(form);
  }
}
