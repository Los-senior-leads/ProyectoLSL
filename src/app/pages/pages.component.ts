import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToBusiness() : void{
    this.router.navigate(['pages/unidadesAdministrativas']);
  }

  goToBuilding() : void{
    this.router.navigate(['pages/edificios']);
  }

  goToOrganization() : void{
    this.router.navigate(['pages/organigrama']);
  }

  goToSalary() : void{
    this.router.navigate(['pages/escalaSalarial']);
  }

  gotToLogin() : void{
    this.router.navigate(['login']);
  }

}
