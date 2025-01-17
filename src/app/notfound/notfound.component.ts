import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notfound',
  standalone: false,
  
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']); // Navigate to the home page
  }
}
