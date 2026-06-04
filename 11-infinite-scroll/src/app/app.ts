import { Component, signal } from '@angular/core';
import { PostList } from './components/post-list/post-list';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [PostList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('11-infinite-scroll');
}
