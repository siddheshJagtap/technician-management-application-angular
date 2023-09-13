import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician-homepage',
  templateUrl: './technician-homepage.component.html',
  styleUrls: ['./technician-homepage.component.css']
})
export class TechnicianHomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLoginPage(){
    this.router.navigate(['/technicians-login']);
  }

  goToRegistrationPage(){
    this.router.navigate(['/technicians-registration']);
  }

  

}
