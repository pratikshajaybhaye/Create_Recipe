
import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  searchResults: any[] = [];
  query: string = '';

  constructor(private recipeService: RecipeService) {}

  search() {
    this.recipeService.getSearchResults(this.query).subscribe(results => {
      this.searchResults = results.results;
    });
  }
}
