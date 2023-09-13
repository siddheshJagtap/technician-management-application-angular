import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technician } from '../technician';
import { TechnicianService } from '../technician.service';

@Component({
  selector: 'app-technician-search',
  templateUrl: './technician-search.component.html',
  styleUrls: ['./technician-search.component.css']
})
export class TechnicianSearchComponent implements OnInit {
 // technician: any;
 technician:Technician = new Technician();
  techniciandata: Object |any;
  error: string|any;
  constructor(private technicianService:TechnicianService,
    private router:Router) { }

  ngOnInit(): void {
    

  }


  goToListPage(){
    this.router.navigate(['/technicians-list']);
  }

  search(){
    //console.log(this.technician)
   this.techniciandata = new Technician();
 this.technicianService.searchTechnician(this.technician).subscribe(data=>{
  //console.log(data);   
   this.techniciandata = data;
  //this.technician=data; 
  console.log(this.techniciandata);
  this.error ="";
    }, error =>{ console.log(error)
      this.error ="TECHNICIAN NOT FOUND !";  }
    
    );
  }

 onSubmit(){
   console.log(this.technician);
   this.search();
 }


}











