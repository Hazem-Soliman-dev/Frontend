import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
constructor(private _authS:AuthService,private _router: Router){

}
isLogedIn = false
  ngOnInit(): void {
   this._authS.getAccessToken().subscribe(data => {
    if(data){
      this.isLogedIn = true;
    }
    else{
      this.isLogedIn = false;
    }
   }
   )
  }

  logout(){
   
    this._router.navigate(['login'])
   this._authS.logout();
  }

}
