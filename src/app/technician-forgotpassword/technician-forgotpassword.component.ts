import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technician } from '../technician';
import { TechnicianService } from '../technician.service';

@Component({
  selector: 'app-technician-forgotpassword',
  templateUrl: './technician-forgotpassword.component.html',
  styleUrls: ['./technician-forgotpassword.component.css']
})
export class TechnicianForgotpasswordComponent implements OnInit {
  technician:Technician = new Technician();
  error: string|any;
  passwordError: string|any;
  password:string|any|HTMLElement;
  confirm_password:string| HTMLElement |any;
  idError: string|any;
  constructor(private technicianService:TechnicianService,
    private router:Router) { }

  ngOnInit(): void {
  }
  goToLoginPage(){
    this.router.navigate(['/technicians-login']);
  }
  Valid(){

    /*if(!this.technician.techID){
      this.idError="CANNOT BE EMPTY";
      return false;

    }*/
    
    this.confirm_password=document.getElementById("confirmPassword");
    console.log(this.confirm_password);
    if(!this.technician.password){
      this.passwordError="CANNOT BE EMPTY";
      return false;

    }
    /*if(this.technician.password!==this.confirm_password){
      alert("passwords don't match");
      return false;
    }*/


    return true;
  }

  onSubmit(){
    console.log(this.technician);
    
    if( this.Valid() ){
     
    
    this.technicianService.forgotPassword(this.technician).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/password-updatesuccess']);
    },
    error =>{ console.log(error)
    this.error="INVALID TECHNICIAN-ID";
    
    }
    
    
    );
  }
}



}
