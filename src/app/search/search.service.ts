import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    private photos: string[] = [
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/c88e11e60315bbac2c9c25f843f3e1e8/5D7C1295/t51.2885-15/e35/39205917_263050717645774_3438284207082700800_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/80fd58a1c3c714b101548e37f483ff33/5D83A6A7/t51.2885-15/e35/p1080x1080/60656113_610699896087598_1157374925108441058_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/2f60afd7f9bd72c89a215cf2e9b1a50b/5D8B8399/t51.2885-15/e35/61568481_339072670088960_5033264271466307765_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/b08044fddd015c1bbcd414cab70cf6c7/5D81C700/t51.2885-15/e35/58654844_2121908481433674_6915929303236848030_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/af771995d61fda7df9d072bb81eff8d5/5D880E1B/t51.2885-15/e35/p1080x1080/58468675_344862889566877_5794283133355294651_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/7d7e4295b5cfba595b3052511735af8b/5D87E1F1/t51.2885-15/e35/49621842_309961072969390_54240024192603546_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/b7d65c6bce9fe32407b3d6c460261e21/5D830CE8/t51.2885-15/e35/43608421_443912976135075_5385859425079989271_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/7c4be0d39599788e81ca74a81dab7718/5D8E2C36/t51.2885-15/e35/40735981_476528909531601_7311651088539724197_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',
        'https://instagram.fmex6-1.fna.fbcdn.net/vp/a3a14f9f4c66f045701211de15e4f61c/5D9CF6BE/t51.2885-15/e35/35274418_2140271049578830_595116475329544192_n.jpg?_nc_ht=instagram.fmex6-1.fna.fbcdn.net',


    ];

  constructor() { }

    getPhotos() {
        return this.photos;
    }
}
