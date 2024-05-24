
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSearchResults(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/complexSearch`, {
      params: {
        query: query,
        number: '5',
        apiKey: this.apiKey
      }
    });
  }

  getRecipeInformation(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/information`, {
      params: {
        includeNutrition: 'false',
        apiKey: this.apiKey
      }
    });
  }

  getInstructions(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/analyzedInstructions`, {
      params: {
        apiKey: this.apiKey
      }
    });
  }
}
