import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technician } from '../technician';
import { TechnicianService } from '../technician.service';

@Component({
  selector: 'app-technician-registration',
  templateUrl: './technician-registration.component.html',
  styleUrls: ['./technician-registration.component.css']
})
export class TechnicianRegistrationComponent implements OnInit {

  technician:Technician = new Technician();
  numberError: string|any;
  fullnameError: string|any;
  genderError: string|any;
  permanentAddressError: string|any;
  communicationaddressError: string|any;
  emailIdError: string|any;
  passwordError: string|any;
  constructor(private technicianService:TechnicianService,
    private router:Router) { }

  ngOnInit(): void {
  }
  goToHomePage(){
this.router.navigate(['/technicians-homepage']);
  }

  saveTechnician(){
    this.technicianService.registerTechnician(this.technician).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/registration-success']);
    },
    error => console.log(error));
  }
  Valid(){

    if (!this.technician.name) {
      this.fullnameError = " Invalid : Name cannot be blank !";
      return false;
   
    }
   // if (!this.state.emailID.includes("@")) {
     if(!this.technician.email){  
   this.emailIdError= "Invalid email";
   //emailIdError:"Invalid email";
    }
  
    
  
    if(! this.technician.gender)   
     {
       this.genderError="Invalid : Cannot be empty";
        return false;
     }
  
      if(! this.technician.permanentAddress)   
     {
        this.permanentAddressError="Invalid Permanent Address: Cannot be empty";
        return false;
     }
  
     if(! this.technician.communicationAddress)   
     {
        this.communicationaddressError="Invalid Communication Address: Cannot be empty";
        return false;
     }
  
     //if( this.technician.password.length < 5)   
      if(!this.technician.password)
      {
          
       this.passwordError=' x Invalid Password (Password length should be more than five)!';
                          
               
      }

    
     if(!this.technician.number){
      this.numberError="CANNOT BE EMPTY";
      return false;

    }
   
 
    //try the same as done in react project 


return true;
  }



  onSubmit(){
    console.log(this.technician);
  if( this.Valid() ){
    this.saveTechnician();
  }
  }

}
