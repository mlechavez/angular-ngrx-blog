import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Post } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(payload: {
    category?: string;
    search?: string;
    pageNumber: number;
    pageSize: number;
  }): Observable<ApiResponse> {
    const { category, search, pageNumber: pageIndex, pageSize } = payload;
    let url = `${this.apiUrl}?`;

    if (category) {
      url = `${url}category=${payload.category}&`;
    }

    if (search) {
      url = `${url}search=${payload.search}&`;
    }

    url = `${url}pageNumber=${pageIndex}&pageSize=${pageSize}`;

    return this.http.get<ApiResponse>(url);
  }

  getPost(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
