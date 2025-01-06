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
constructor(private _userS:UserService){}
  userTypeForm:FormGroup = new FormGroup({
    name : new FormControl(''),
    desc: new FormControl('')
  })


  addNewType(){
    this._userS.addUserType(this.userTypeForm.value).subscribe(data=> console.log(data))
  }
}
