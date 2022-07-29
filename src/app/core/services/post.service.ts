import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/post.payload';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(payload: {
    pageIndex: number;
    pageSize: number;
  }): Observable<ApiResponse> {
    const { pageIndex, pageSize } = payload;
    return this.http.get<ApiResponse>(
      `${this.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
}
