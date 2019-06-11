import { Role } from "./model.role";

export class User {
    id: number;
    username: String;
    password: String;
    instagramId: String;
    imageProfile: String;    
    enabled: boolean;
    role: Role;
    images: String[];

    constructor() {
        this.id = 0;
        this.username = "";
        this.password = "";
        this.instagramId = "";
        this.imageProfile = "";
        this.enabled = true;
        this.role = new Role();        
        this.images = [];        
    }
}