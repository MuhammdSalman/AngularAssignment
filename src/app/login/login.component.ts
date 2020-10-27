import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  passwordPatteren = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
  EmailAddress: string;
  accountPassword: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    if (localStorage.getItem('Email') == this.EmailAddress && localStorage.getItem('Password') == this.accountPassword) {
      console.log('User Successfully Authenticated');
      localStorage.setItem('Check', 'true');
      console.log(localStorage.getItem('Check'));
      this._router.navigate(['/home']);
      this.reload();

    }
    else {
      this._router.navigate(['/oops']);
      console.log('User Authentication Failed');
    }
    // console.log(localStorage.getItem('Email'));
    // console.log(localStorage.getItem('Password'));
    // console.log(this.EmailAddress);
    // console.log(this.accountPassword);
  }

  reload() {
    setTimeout(function () { window.location.reload(); }, 700);

  }
}
