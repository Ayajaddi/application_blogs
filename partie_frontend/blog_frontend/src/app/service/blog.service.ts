import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const API_URL ="http://localhost:8080/api/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private httpClient: HttpClient) { }

  addBlog(blog: Object): Observable<Object>{
    return this.httpClient.post(API_URL,blog)
  }

  getBlogs(): Observable<any>{
    return this.httpClient.get(API_URL)
   }


  detailsBlog(id: string): Observable<any>{
    return this.httpClient.get(`${API_URL}/${id}`);
  }
  findByTitle(title: any) {
    return this.httpClient.get(`${API_URL}?title=${title}`);
  }
}
