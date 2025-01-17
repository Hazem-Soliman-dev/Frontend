import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddproduectService } from '../services/addproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private Auth:AddproduectService,private router:Router) { }
  file:any;
  filechange(event:any){
    if(event.target.files.length>0){
     this.file=event.target.files[0];
   }
  }
  onSubmit(data:NgForm){

    data.value.productImage=this.file;
    let formData=new FormData();
    formData.append('name',data.value?.name);
    formData.append('desc',data.value?.desc);
    formData.append('price',data.value?.price);
    formData.append('productImage',this.file);
    this.Auth.createProduct(formData).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(err);
      }
    })
    console.log('data Submitted tttty:', formData);

  }
}



