import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagesSuperUser',
  templateUrl: './pagesSuperUser.component.html',
  styleUrls: ['./pagesSuperUser.component.css']
})
export class PagesSuperUserComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  gotToLogin() : void{
    this.router.navigate(['login']);
  }

}
