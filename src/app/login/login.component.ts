import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToPages() : void{
    this.router.navigate(['pages']);
    console.log("cambiando a pages")
  }

  goToPagesUser() : void{
    this.router.navigate(['pagesUser']);
  }

  goToPagesSuperUser() : void{
    this.router.navigate(['pagesSuperUser']);
  }

}
