import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Post } from '../post/post';
import { PostService } from '../../services/post';

@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule, Post],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList implements OnInit {
  posts: any[] = [];
  loading: boolean = false;
  page: number = 1;
  limit: number = 10;
  errorMessage: string = '';
  private hasMorePosts: boolean = true;
  private readonly scrollThreshold: number = 80;

  constructor(private postService: PostService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private handleError(error: any): void {
    console.error('Error fetching posts:', error);
    this.errorMessage = 'Something went wrong while fetching posts. Please try again later!';
  }

  loadPosts(): void {
    if (!this.hasMorePosts) {
      return;
    }

    this.loading = true;
    this.postService
      .getPosts(this.page, this.limit)
      .pipe(
        finalize(() => {
          this.loading = false;
          if (this.hasMorePosts && !this.errorMessage) {
            Promise.resolve().then(() => this.checkForMorePosts());
          }
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (newPosts) => {
          if (newPosts?.length) {
            // append new posts to the existing list
            this.posts = [...this.posts, ...newPosts];
            this.page++;
            this.errorMessage = '';
          }

          if (!newPosts?.length || newPosts.length < this.limit) {
            this.hasMorePosts = false;
          }
        },
        error: (error) => {
          this.hasMorePosts = false;
          this.handleError(error);
        },
      });
  }

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onScroll(): void {
    if (this.isAtBottom() && !this.loading) {
      this.loadPosts();
    }
  }

  private isAtBottom(): boolean {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    return scrollPosition >= pageHeight - this.scrollThreshold;
  }

  private checkForMorePosts(): void {
    const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    if (window.innerHeight >= pageHeight && !this.loading) {
      this.loadPosts();
    }
  }
}
