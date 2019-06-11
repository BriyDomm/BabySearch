import { User } from "./model.user";

export class Receipt{
    id: number;
    amount: number;
    transactionNumber: number;
    cardOwner: String;
    moneyType: String;
    service: String;
    paymentMethod: String;
    status: boolean;
    user: User;    
    paymentDate: Date;
    expirationDate: Date;
    
    constructor(){
        this.id = 0;
        this.amount = 0.0;
        this.transactionNumber = 0;
        this.cardOwner = ""; 
        this.moneyType = "USD";        
        this.service = "";        
        this.paymentMethod = "";        
        this.status = true;          
        this.user = new User();
        this.paymentDate = new Date();
        this.expirationDate = new Date();   
    }
}