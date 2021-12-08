import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagesUsers',
  templateUrl: './pagesUsers.component.html',
  styleUrls: ['./pagesUsers.component.css']
})
export class PagesUsersComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goToBusiness() : void{
    this.router.navigate(['pagesUser/unidadesAdministrativasUser']);
  }

  goToBuilding() : void{
    this.router.navigate(['pagesUser/edificiosUser']);
  }

  goToOrganization() : void{
    this.router.navigate(['pagesUser/organigramaUser']);
  }

  goToSalary() : void{
    this.router.navigate(['pagesUser/escalaSalarialUser']);
  }

}
