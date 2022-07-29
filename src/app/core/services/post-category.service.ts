import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostCategoryService {
  apiUrl = 'http://localhost:5000/api/categories';

  constructor(private http: HttpClient) {}

  getPostCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}`);
  }
}
