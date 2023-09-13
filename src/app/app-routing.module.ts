import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableListComponent } from './datatable-list/datatable-list.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { PasswordUpdatesuccessComponent } from './password-updatesuccess/password-updatesuccess.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { TechnicianForgotpasswordComponent } from './technician-forgotpassword/technician-forgotpassword.component';
import { TechnicianHomepageComponent } from './technician-homepage/technician-homepage.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { TechnicianLoginComponent } from './technician-login/technician-login.component';
import { TechnicianRegistrationComponent } from './technician-registration/technician-registration.component';
import { TechnicianSearchComponent } from './technician-search/technician-search.component';
import { TechnicianViewComponent } from './technician-view/technician-view.component';
import { TehnicianUpdateComponent } from './tehnician-update/tehnician-update.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';

const routes: Routes = [
{path:'technicians-list',component:TechnicianListComponent},
{path:'technicians-homepage',component:TechnicianHomepageComponent},
{path:'technicians-registration',component:TechnicianRegistrationComponent},
{path:'technicians-login',component:TechnicianLoginComponent},
{path:'registration-success',component:RegistrationSuccessComponent},
{path:'technicians-update/:TechID',component:TehnicianUpdateComponent},
{path:'update-success',component:UpdateSuccessComponent},
{path:'technicians-view/:TechID',component:TechnicianViewComponent},
{path:'technicians-forgotpassword',component:TechnicianForgotpasswordComponent},
{path:'login-success',component:LoginSuccessComponent},
{path:'technicians-search',component:TechnicianSearchComponent},
{path:'password-updatesuccess',component:PasswordUpdatesuccessComponent},
{path:'datatable-list',component:DatatableListComponent},
{path:'',redirectTo:'technicians-homepage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
