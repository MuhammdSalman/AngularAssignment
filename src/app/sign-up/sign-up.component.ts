import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  specialCharactersRemover = /^[a-zA-Z0-9.,-/:;()&@“‘][a-zA-Z0-9.,-/:;()&@“‘ ]+[a-zA-Z0-9.,-/:;()&@“‘]$/;
  errorMessageForSpecialCharacters = 'Only these characters . , - / : ; () & @ “ ‘ are allowed';
  passwordPatteren = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/;
  asa: boolean;
  toogle: boolean;
  confirm_pass_toggle: boolean;
  showSpinner: boolean;
  mismatch: boolean;
  confirm_password: string;
  focus;
  focus1;
  focus2;
  focus3;
  password: string;
  emailAddress: any;
  companyNameText: string;
  firstNameText: string;
  phoneNo: number;
  phoneNumbers: any[] = [{
    phoneNo: ''
  }];
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.toogle = false;
    this.confirm_pass_toggle = false;
  }

  matchPassword() {
    if (this.confirm_password !== this.password) {
      this.mismatch = true;
    } else {
      this.mismatch = false;
    }

  }


  save() {
    localStorage.setItem('UserName', this.firstNameText);
    localStorage.setItem('Password', this.password);
    localStorage.setItem('Email', this.emailAddress);
    localStorage.setItem('Phone', this.phoneNumbers.toString());
    this._router.navigate(['/login']);

    // console.log(localStorage.getItem('UserName'));
    // console.log(this.password);
    // console.log(this.emailAddress);
  }

  addNumber()
  {
    this.phoneNumbers.push({
      id: this.phoneNumbers.length + 1,
      phoneNo: ''
    });
  }
  

}
