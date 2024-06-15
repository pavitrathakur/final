import { coffe } from "./coffe";

export class CartItem{
    constructor( public coffe:coffe){}
    quantity:number=1;
    price: number =this.coffe.price
}
