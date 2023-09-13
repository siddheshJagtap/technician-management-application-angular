import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToListPage(){
    this.router.navigate(['/technicians-list']);
  }
  }

