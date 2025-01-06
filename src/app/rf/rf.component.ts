import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidor } from '../customvalidators/password.validators';

@Component({
  selector: 'app-rf',
  standalone: false,

  templateUrl: './rf.component.html',
  styleUrl: './rf.component.css',
})
export class RfComponent implements OnInit {
  constructor() {
    /////////////
  }
  ngOnInit(): void {
    //get data from service
    this.joinusForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          PasswordValidor.passwordStrength(),
        ]),
        //,PasswordValidor.matchPassword()
        retypepassword: new FormControl('', [Validators.required]),
        languages: new FormArray([new FormControl('')]),
      },
      { validators: PasswordValidor.matchPasswordFrom }
    );
  }

  get languages(): FormArray {
    return this.joinusForm.get('languages') as FormArray;
  }

  addNewLanguage() {
    let myArray = this.joinusForm.get('languages') as FormArray;
    myArray.push(new FormControl(''));
  }

  joinusForm!: FormGroup;
  signup() {
    console.log(this.joinusForm.value);
  }
}
