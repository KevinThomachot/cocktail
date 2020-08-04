import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktail = "";
  apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.cocktail}`;
  constructor(private http: HttpClient) { }

  getCocktail(cocktail) {
    return this.http.get(this.apiUrl + cocktail);
  }

}
