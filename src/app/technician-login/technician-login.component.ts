import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technician } from '../technician';
import { TechnicianService } from '../technician.service';

@Component({
  selector: 'app-technician-login',
  templateUrl: './technician-login.component.html',
  styleUrls: ['./technician-login.component.css']
})
export class TechnicianLoginComponent implements OnInit {
  [x: string]: any;
  technician:Technician = new Technician();
  constructor(private technicianService:TechnicianService,
    private router:Router) { }

  ngOnInit(): void {
  }
  goToList(){
    this.router.navigate(['/technicians-list']);
  }
homepage(){
  this.router.navigate(['/technicians-homepage']);
}

register(){
  this.router.navigate(['/technicians-registration']);
}
forgotpassword(){
  this.router.navigate(['/technicians-forgotpassword']);
}

login(){
  this.router.navigate(['/login-success']);
}
onSubmit(){
  console.log(this.technician);
  this.technicianService.loginTechnician(this.technician).subscribe(data=>{
    console.log(data);
    this.login();
   // this.router.navigate(['/registration-success']);
   this.error ="";
  },
  error =>{ console.log(error)
           this.error ="INVALID TECHID OR PASSWORD !";   }
    
    );
  
  

}

}
