import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

    constructor(
        private router: RouterExtensions
    ) { }

  ngOnInit() {
  }

  public login(){
      this.router.navigate(['/index'])
  }

}
