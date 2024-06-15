import { Component } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { CoffeService } from '../services/coffe.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(coffeService:CoffeService){
    coffeService.getAllTags().subscribe(serverTags=>{
      this.tags=serverTags;
    });
  }
}
