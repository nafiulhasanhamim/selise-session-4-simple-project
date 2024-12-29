import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent implements OnInit {
  posts: any[] = [];
  loading: boolean = true;
  errorMessage!: string;

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get(this.apiUrl).subscribe(
      (data) => {
        this.posts = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load data';
        this.loading = false;
      }
    );
  }
}
