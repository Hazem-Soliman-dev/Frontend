import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private _productS : ProductService){}
addProductForm : FormGroup = new FormGroup({
  name : new FormControl(''),
  desc : new FormControl(''),
  price : new FormControl(''),
  productImage : new FormControl(null),
})

onFileChange(event:any){
if(event.target.files.length > 0){
  const file = event.target.files[0];
  this.addProductForm.patchValue({productImage : file})
}
}
addProduct(){
let formData = new FormData();
formData.append('name',this.addProductForm.get('name')?.value);
formData.append('desc',this.addProductForm.get('desc')?.value);
formData.append('price',this.addProductForm.get('price')?.value);
formData.append('productImage',this.addProductForm.get('productImage')?.value);
 

this._productS.addProduct(formData).subscribe(data=>console.log(data)
)


}
}
