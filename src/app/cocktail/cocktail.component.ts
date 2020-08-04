import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  cocktail;

  constructor(private CocktailService: CocktailService) { }

  ngOnInit(): void {
  }

  getCocktail(cocktail: string) {
    this.CocktailService.getCocktail(cocktail).subscribe(data => this.cocktail = data);
  }
}
