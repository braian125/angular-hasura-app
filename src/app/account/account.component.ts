import { Component, OnInit } from '@angular/core';
import {Account} from './../interfaces/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  account = <Account>{};
  
  constructor() { 
  }

  ngOnInit() {
  }

}
