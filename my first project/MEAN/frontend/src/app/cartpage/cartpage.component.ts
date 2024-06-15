import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitems';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartPageComponent implements OnInit {
    cart!: Cart;
    constructor(private cartService: CartService) {
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
      })
     }

    ngOnInit(): void {
    }

    removeFromCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.coffe.id);
    }

    changeQuantity(cartItem:CartItem,quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.coffe.id, quantity);
    }



}
