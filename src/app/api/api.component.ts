import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

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

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.allPost().subscribe(
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
