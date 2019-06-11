import { Injectable } from '@angular/core';
import { User } from '~/app/model/model.user';
import { Role } from '~/app/model/model.role';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  //profiles: [User];
  //profiles:User[];
  private profiles: Array<User> = [];

  constructor() { }

  getProfiles() {
    let free = new Role();
    free.authority="Free";

    let user1 = new User();
    user1.id = 1;
    user1.username = "Rihanna";
    user1.imageProfile = "https://timedotcom.files.wordpress.com/2018/09/rihanna-barbados-ambassador.jpg?quality=85";
    user1.role=free;
    user1.images = ["https://imagevars.gulfnews.com/2018/9/22/1_16a0850c38f.2281092_294200496_16a0850c38f_large.jpg", "https://www.etonline.com/sites/default/files/images/2017-07/1280_rihanna_821626646_072417.jpg", "https://www.mascorazon.com/wp-content/uploads/2014/01/corazon124.jpg"];
    
    let user2 = new User();
    user2.id = 2;
    user2.username = "Maite Perroni";
    user2.imageProfile = "https://i.pinimg.com/736x/e6/17/ef/e617ef794ee70dcb18238e28ed4fbd81.jpg";
    user2.role=free;
    user2.images = ["https://i.ytimg.com/vi/btuD4YQ1rjE/maxresdefault.jpg","https://mvsnoticias.com/wp-content/uploads/historico/62405fb2ad684208adba5844f30644d1.jpg","https://depeso.com/wp-content/uploads/2017/07/Maite-Perroni-1.jpg"];

    let user3 = new User();
    user3.id = 2;
    user3.username = "Scarlett Johansson";
    user3.imageProfile = "https://c.wallhere.com/photos/e4/b7/Scarlett_Johansson-345570.jpg!d";
    user3.role=free;
    user3.images = ["http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/06/07/14968366163525.png","https://images-na.ssl-images-amazon.com/images/I/514fwtw%2BXRL._SY450_.jpg","https://www.viveusa.mx/sites/default/files/styles/large/public/scarlett_reuters_4.jpg?itok=V8uljzWw"];

    let user4 = new User();
    user4.id = 2;
    user4.username = "Salma Hayek";
    user4.imageProfile = "https://st1.uvnimg.com/5c/d4/2f3843c44609a164b1bfd506a64f/SPP_SHSTRC150517_51.jpg";
    user4.role=free;
    user4.images = ["https://www.elsalvadortimes.com/media/elsalvadortimes/images/2018/05/13/2018051312170698153.jpg","https://img.peru21.pe/files/listing_ec_flujo_xx/uploads/2018/08/11/5b6f007f4e2d5.jpeg","https://elpais.bo/wp-content/uploads/2019/05/Salma-Hayek-10-millones-Instagram-CENTRAL-1.jpg"];

    let user5 = new User();
    user5.id = 2;
    user5.username = "Yanet García";
    user5.imageProfile = "https://eldiariony.files.wordpress.com/2019/01/yg.jpg?quality=80&strip=all&w=526";
    user5.role=free;
    user5.images = ["https://ugc-02.cafemomstatic.com/gen/constrain/730/5000/80/2018/10/18/13/c1/rl/phe60vpt4o1.jpg","https://media.metrolatam.com/2019/05/10/yanetgarcia-1f171bb393ec86256fc1ff963e615bec-600x400.jpg","https://republica.gt/wp-content/uploads/2018/08/Yanet-Garcia.jpg"];

    this.profiles.push(user1);
    this.profiles.push(user2);
    this.profiles.push(user3);
    this.profiles.push(user4)
    this.profiles.push(user5)
    //this.profiles=[user1, user2, user3];
    
    return this.profiles;

  }

}
