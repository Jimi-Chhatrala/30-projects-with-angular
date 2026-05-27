import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faqAccordionAnimations } from './faq-accordion.animation';

@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.scss',
  animations: [faqAccordionAnimations.slideToggle],
})
export class FaqAccordion {
  openedIndex: number | null = null;

  faqs = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a platform for building mobile and desktop web applications.',
    },
    {
      question: 'What is a component in Angular?',
      answer:
        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',
    },
    {
      question: 'What are Angular directives?',
      answer:
        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',
    },
  ];

  toggleFaq(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
