import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import { IndexService } from './index.service';
import { User } from '~/app/model/model.user';

@Component({
    selector: 'ns-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    moduleId: module.id,
    providers: [IndexService]
})
export class IndexComponent implements OnInit {
    count: Object[];
    number=50;
    public fruitList: Array<string> = [];
    public profiles: Array<User> = [];

    constructor(
        private router: RouterExtensions,
        private indexService: IndexService
    ) { }

    locations: { city: string, country: string, imageSrc: string }[] = [
        { city: "Yarlford", country: "Aldorria", imageSrc: "https://placem.at/places?random=1&w=500&txt=0" },
        { city: "Paentmarwy", country: "Bahari", imageSrc: "https://placem.at/places?random=2&w=500&txt=0" },
        { city: "Landow", country: "Erewhon", imageSrc: "https://placem.at/places?random=3&w=500&txt=0" },
        { city: "Penrith", country: "Gilead", imageSrc: "https://placem.at/places?random=4&w=500&txt=0" },
        { city: "Aberystwyth", country: "Mandorra", imageSrc: "https://placem.at/places?random=5&w=500&txt=0" },
        { city: "Macclesfield", country: "Nambutu", imageSrc: "https://placem.at/places?random=6&w=500&txt=0" },
        { city: "Larnwick", country: "Deltora", imageSrc: "https://placem.at/places?random=77&w=500&txt=0" },
        { city: "Snowbush", country: "Islandia", imageSrc: "https://placem.at/places?random=8&w=500&txt=0" },
        { city: "Kelna", country: "Norteguay", imageSrc: "https://placem.at/places?random=55&w=500&txt=0" },
        { city: "Drumnacanvy", country: "Graznavia", imageSrc: "https://placem.at/places?random=44&w=500&txt=0" },
        { city: "Hartlepool", country: "Drasselstein", imageSrc: "https://placem.at/places?random=11&w=500&txt=0" },
        { city: "Timeston", country: "Brungaria", imageSrc: "https://placem.at/places?random=33&w=500&txt=0" }
    ];
    ngOnInit() {
        this.fruitList.push("Melón");
        this.fruitList.push("Sandía");
        this.fruitList.push("Coco");
        this.fruitList.push("Fresa");
        this.fruitList.push("Limón");

        this.profiles = this.indexService.getProfiles();

    }
    shareProfile(){
        alert({
            title: "Do you want to share this profile?",
            cancelButtonText: "No, I'm not sure",
            okButtonText: "Yes, I want"
        });
    }

    findMe(){
        this.router.navigate(['/form'])
    }

    see(){
        this.router.navigate(['/micro'])
    }

}
