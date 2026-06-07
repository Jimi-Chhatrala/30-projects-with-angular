import { Component, signal } from '@angular/core';
import { FeedbackForm } from './feedback-form/feedback-form';

@Component({
  selector: 'app-root',
  imports: [FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('13-feedback-form-using-forms-module');
}
