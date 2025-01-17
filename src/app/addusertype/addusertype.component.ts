import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addusertype',
  standalone: false,
  
  templateUrl: './addusertype.component.html',
  styleUrl: './addusertype.component.css'
})
export class AddusertypeComponent {
  userType = {
    name: '',
    permissions: '',
  };

  onAddUserType() {
    if (!this.userType.name) {
      alert('User Type Name is required.');
      return;
    }

    console.log('New User Type:', {
      name: this.userType.name,
      permissions: this.userType.permissions
        .split(',')
        .map((permission) => permission.trim()),
    });

    // Add logic for saving user type to backend or database
    alert('User Type added successfully!');
    this.resetForm();
  }

  resetForm() {
    this.userType = {
      name: '',
      permissions: '',
    };
  }
// constructor(private _userS:UserService){}
//   userTypeForm:FormGroup = new FormGroup({
//     name : new FormControl(''),
//     desc: new FormControl('')
//   })


//   addNewType(){
//     this._userS.addUserType(this.userTypeForm.value).subscribe(data=> console.log(data))
//   }
}
