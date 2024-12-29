import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  constructor(private apiService: ApiService) {}
  allPost(): Observable<any> {
    return this.apiService.get(this.postUrl);
  }
}
