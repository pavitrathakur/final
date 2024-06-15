import { Injectable } from '@angular/core';
import { coffe } from '../shared/models/coffe';
import { sample_coffe, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COFFE_BY_ID_URL, DRINK_BY_SEARCH_URL, DRINK_BY_TAG_URL, DRINK_TAGS_URL, DRINK_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root',
})
export class CoffeService {

  constructor(private http:HttpClient){ }
    getAll(): Observable<coffe[]>{
      return this.http.get<coffe[]>(DRINK_URL);

    }
    getAllTags(): Observable<Tag[]> {
      return this.http.get<Tag[]>(DRINK_TAGS_URL);
    }
    getAllDrinkBySearchTerm(searchTerm: string) {
      return this.http.get<coffe[]>(DRINK_BY_SEARCH_URL + searchTerm);
    }
    getAllDrinkByTag(tag: string): Observable<coffe[]> {
      return tag === "All" ?
        this.getAll() :
        this.http.get<coffe[]>(DRINK_BY_TAG_URL + tag);
    }

    getCoffeById(coffeId:string):Observable<coffe>{
      return this.http.get<coffe>(COFFE_BY_ID_URL + coffeId);
    }

  }



