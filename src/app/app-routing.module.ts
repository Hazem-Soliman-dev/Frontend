import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { RfComponent } from './rf/rf.component';
import { AddusertypeComponent } from './addusertype/addusertype.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './products-list/product-details/product-details.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductsListComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'dashboard/products',component:ProductsComponent,canActivate:[authGuard]},
  {path:'dashboard/orders',component:OrdersComponent,canActivate:[authGuard]},
  {path:'rf',component:RfComponent},
  {path:'addusertype',component:AddusertypeComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'**',component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
