import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-updatesuccess',
  templateUrl: './password-updatesuccess.component.html',
  styleUrls: ['./password-updatesuccess.component.css']
})
export class PasswordUpdatesuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToLoginPage(){
    this.router.navigate(['/technicians-login']);
  }
}
