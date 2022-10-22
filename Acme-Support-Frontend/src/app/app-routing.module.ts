import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewdepartmentComponent } from './newdepartment/newdepartment.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { AssignDeptComponent } from './assign-dept/assign-dept.component';
import { UpdatedeptComponent } from './updatedept/updatedept.component';
import { DeletedeptComponent } from './deletedept/deletedept.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'newuser',component:NewUserComponent},
  {path:'newdept',component:NewdepartmentComponent},
  {path:'newtickt',component:CreateticketComponent},
  {path:'assigndept',component:AssignDeptComponent},
  {path:'updatedept',component:UpdatedeptComponent},
  {path:'deletedept',component:DeletedeptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
