
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  recipe: any;
  instructions!: any[];

  constructor(
    private route: ActivatedRoute,private recipeService: RecipeService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeInformation(id).subscribe(recipe => {
        this.recipe = recipe;
      });

      this.recipeService.getInstructions(id).subscribe(instructions => {
        this.instructions = instructions;
      });
    }
  }
}
