import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Technician} from '../technician'
import { TechnicianService } from '../technician.service';
//import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {
 
 
  technicians: Technician[] | undefined | any ;

  constructor(private techncianService:TechnicianService,
    private router:Router) { }

  ngOnInit(): void {
  this.getTechnicians();   
  }
private getTechnicians(){
  this.techncianService.getTechnicianList().subscribe(data =>{
this.technicians = data ;
  });
}
updateTechnician(TechID: any){
  //console.log(TechID);
  this.router.navigate(['technicians-update', TechID]);
}

deleteTechnician(TechID:any){
  if(confirm("Are you sure to delete Technician with TechID "+ TechID+"?")) {
  this.techncianService.deleteTechnician(TechID).subscribe(data=>{
    console.log(data);
   this.getTechnicians();
  
  });
}
}

viewTechnician(TechID:any){
  this.router.navigate(['technicians-view', TechID]);
}
logout(){
  this.router.navigate(['/technicians-login']);
}
search(){
  this.router.navigate(['/technicians-search']);
}

datatable(){
  this.router.navigate(['/datatable-list']);
}

}
 

