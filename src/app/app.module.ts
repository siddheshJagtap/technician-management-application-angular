import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnicianListComponent } from './technician-list/technician-list.component';
import { TechnicianHomepageComponent } from './technician-homepage/technician-homepage.component';
import { TechnicianRegistrationComponent } from './technician-registration/technician-registration.component';
import { TechnicianLoginComponent } from './technician-login/technician-login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { TehnicianUpdateComponent } from './tehnician-update/tehnician-update.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { TechnicianViewComponent } from './technician-view/technician-view.component';
import { TechnicianForgotpasswordComponent } from './technician-forgotpassword/technician-forgotpassword.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { TechnicianSearchComponent } from './technician-search/technician-search.component';
import { PasswordUpdatesuccessComponent } from './password-updatesuccess/password-updatesuccess.component';
//import { DataTableModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
//import {DialogModule} from 'primeng/dialog';
//import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { DatatableListComponent } from './datatable-list/datatable-list.component';
//import {TableModule} from 'primeng/table';
//import {PrimeIcons} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    TechnicianListComponent,
    TechnicianHomepageComponent,
    TechnicianRegistrationComponent,
    TechnicianLoginComponent,
    RegistrationSuccessComponent,
    TehnicianUpdateComponent,
    UpdateSuccessComponent,
    TechnicianViewComponent,
    TechnicianForgotpasswordComponent,
    LoginSuccessComponent,
    TechnicianSearchComponent,
    PasswordUpdatesuccessComponent,
    DatatableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    
    CalendarModule,
		SliderModule,
		
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    RouterModule ,
    TableModule//,
   // PrimeIcons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
