
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from '../technician';
import { TechnicianService } from '../technician.service';

@Component({
  selector: 'app-tehnician-update',
  templateUrl: './tehnician-update.component.html',
  styleUrls: ['./tehnician-update.component.css']
})
export class TehnicianUpdateComponent implements OnInit {
  techID: any;
  technician:Technician = new Technician();
  constructor(private technicianService:TechnicianService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.techID=this.route.snapshot.params['TechID'];
    this.technicianService.getTechnicianById(this.techID).subscribe(data=>{
      this.technician = data;
    },error => console.log(error));
 
  }

  goToListPage(){
    this.router.navigate(['/technicians-list']);
      }
    
      
    
    
    
      onSubmit(){
        console.log(this.technician);
        this.technicianService.updateTechnician(this.techID,this.technician).subscribe(data=>{
          //console.log(data);
          this.router.navigate(['/update-success']);
        },
        error => console.log(error));


      }

}
