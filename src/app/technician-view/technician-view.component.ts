import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from '../technician';
import {TechnicianService} from '../technician.service';
@Component({
  selector: 'app-technician-view',
  templateUrl: './technician-view.component.html',
  styleUrls: ['./technician-view.component.css']
})
export class TechnicianViewComponent implements OnInit {
  techID: any;
  technician: Technician | any;
  constructor(private technicianService:TechnicianService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.techID=this.route.snapshot.params['TechID'];
    this.technician = new Technician();
    this.technicianService.getTechnicianById(this.techID).subscribe(data=>{
      this.technician = data;
    });
  }
  goToListPage(){
    this.router.navigate(['/technicians-list']);
      }

}
