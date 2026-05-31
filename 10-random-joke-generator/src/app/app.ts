import { Component, signal } from '@angular/core';
import { Joke } from './joke/joke';

@Component({
  selector: 'app-root',
  imports: [Joke],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('10-random-joke-generator');
}
