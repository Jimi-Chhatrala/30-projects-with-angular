import { Component, signal } from '@angular/core';
import { CurrencyConverter } from './currency-converter/currency-converter';

@Component({
  selector: 'app-root',
  imports: [CurrencyConverter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('17-currency-converter');
}
