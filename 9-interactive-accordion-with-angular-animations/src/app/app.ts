import { Component, signal } from '@angular/core';
import { FaqAccordion } from './faq-accordion/faq-accordion';

@Component({
  selector: 'app-root',
  imports: [FaqAccordion],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('9-interactive-accordion-with-angular-animations');
}
