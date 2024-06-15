import { Component } from '@angular/core';
import { coffe } from '../shared/models/coffe';
import { CoffeService } from '../services/coffe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-coffepage',
  templateUrl: './coffepage.component.html',
  styleUrls: ['./coffepage.component.scss']
})
export class CoffepageComponent {

  coffe!: coffe;

  constructor(activatedRoute:ActivatedRoute, coffeService:CoffeService,
    private cartService:CartService , private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      coffeService.getCoffeById(params.id).subscribe(serverCoffe =>{
        this.coffe=serverCoffe;
      });
    })
  }
  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.coffe);
    this.router.navigateByUrl('/cartpage');
  }
}


