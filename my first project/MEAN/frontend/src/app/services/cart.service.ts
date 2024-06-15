import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import {coffe } from '../shared/models/coffe'
import { CartItem } from '../shared/models/cartitems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart>= new BehaviorSubject(this.cart) ;
  constructor() { }

  addToCart(coffe:coffe):void{
    let cartItem =this.cart.items.find(item => item.coffe.id === coffe.id);
    if(cartItem)
    return;

    this.cart.items.push(new CartItem(coffe));
    this.setCartToLocalStorage();
  }
  removeFromCart(coffeId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.coffe.id != coffeId);
      this.setCartToLocalStorage();
  }
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.coffe.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.coffe.price;
    this.setCartToLocalStorage();

  }
  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();

  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  getCart():Cart{
    return this.cartSubject.value;
  }
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
