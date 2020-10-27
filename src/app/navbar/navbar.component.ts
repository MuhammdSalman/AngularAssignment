import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userName:string;
check:any;
  constructor() { }

  ngOnInit() {
    this.userName =  localStorage.getItem('UserName');
    this.check =  localStorage.getItem('Check');
  }

  logout()
  {
    localStorage.clear();
    window.location.reload();
  }

}
