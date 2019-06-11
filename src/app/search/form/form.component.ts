import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  moduleId: module.id,
})
export class FormComponent implements OnInit {

    constructor(
        private router: RouterExtensions
    ) { }

  ngOnInit() {
  }

  public index(){
     this.router.back();
  }
}
