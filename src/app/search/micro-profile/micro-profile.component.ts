import { Component, OnInit, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import { SearchService } from "../search.service";

@Component({
  selector: 'ns-micro-profile',
  templateUrl: './micro-profile.component.html',
  styleUrls: ['./micro-profile.component.css'],
  moduleId: module.id,
})
export class MicroProfileComponent implements OnInit {

    photos: string[] = [];

  constructor(
      private router: RouterExtensions,
      private searchService: SearchService
  ) {
      this.photos = this.searchService.getPhotos();
  }


  ngOnInit() {
  }

    public onBack(){
        this.router.back();
    }
}
