import { Component, OnInit } from '@angular/core';
import { coffe } from '../shared/models/coffe';
import { CoffeService } from '../services/coffe.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
   drink:coffe[]=[];
   constructor(private coffeService:CoffeService,activateRoute:ActivatedRoute){
    let drinkObservalbe:Observable<coffe[]>;
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      drinkObservalbe=this.coffeService.getAllDrinkBySearchTerm(params.searchTerm);
      else if(params.tag)
      drinkObservalbe =this.coffeService.getAllDrinkByTag(params.tag);
      else
      drinkObservalbe = coffeService.getAll();

    drinkObservalbe.subscribe((serverDrink)=>{
      this.drink=serverDrink;
    })
    })

   }

  ngOnInit(): void {
}
}
