import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  imports: [CommonModule],
  templateUrl: './joke.html',
  styleUrl: './joke.scss',
})
export class Joke {
  jokeSetup = signal('');
  jokePunchline = signal('');
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private jokeService: JokeService) {}

  fetchJoke() {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.jokeSetup.set(joke.setup);
        this.jokePunchline.set(joke.punchline);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to fetch a joke. Please try again!');
        this.jokeSetup.set('');
        this.jokePunchline.set('');
        this.isLoading.set(false);
      },
    });
  }
}
