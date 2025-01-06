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

const routes: Routes = [
  
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductsListComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
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
