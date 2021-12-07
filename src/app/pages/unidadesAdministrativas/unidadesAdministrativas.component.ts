import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidadesAdministrativas',
  templateUrl: './unidadesAdministrativas.component.html',
  styleUrls: ['./unidadesAdministrativas.component.css']
})
export class UnidadesAdministrativasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEdificios() : void {
    this.router.navigate(['edificios'])
  }

}
