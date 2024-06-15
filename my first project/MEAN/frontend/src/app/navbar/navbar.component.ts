import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

    cartQuantity=0;
    user!:User;
  router: any;
    constructor(cartService:CartService, private userService:UserService){
      cartService.getCartObservable().subscribe((newCart)=>{
        this.cartQuantity=newCart.totalCount;
      })

      userService.userObservable.subscribe((newUser)=>{
        this.user=newUser;
      })
    }



  ngOnInit(): void {

  }
  logout(){
    this.userService.logout();

  }
get isAuth(){
  return this.user.token;
}

}
