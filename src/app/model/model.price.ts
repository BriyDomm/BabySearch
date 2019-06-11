import { Role } from "./model.role";

export class Price {
    id: number;
    price: number;
    enabled: boolean;
    date: Date;
    role: Role;        

    constructor() {
        this.id = 0; 
        this.price = 0.0;
        this.enabled = true;     
        this.date = new Date();
        this.role = new Role();     
    }
}