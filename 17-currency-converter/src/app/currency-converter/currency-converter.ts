import { Component } from '@angular/core';
import { CurrencyConverterService } from '../services/currency-converter.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.scss',
})
export class CurrencyConverter {
  amount: number | string | null = null;
  sourceCurrency: string = 'USD';
  targetCurrency: string = 'EUR';
  result: number = 0;
  conversionRate: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];
  currencyFlags: { [key: string]: string } = {
    USD: '🇺🇸',
    EUR: '🇪🇺',
    GBP: '🇬🇧',
    INR: '🇮🇳',
    JPY: '🇯🇵',
  };

  constructor(private currencyConverterService: CurrencyConverterService) {}

  convertCurrency() {
    if (this.amount === null || this.amount === undefined || this.amount === '') {
      this.result = 0;
      this.conversionRate = null;
      return;
    }

    const normalizedAmount = Number(this.amount);
    if (!Number.isFinite(normalizedAmount)) {
      this.result = 0;
      this.conversionRate = null;
      return;
    }

    this.conversionRate = this.currencyConverterService.getConversionRate(
      this.sourceCurrency,
      this.targetCurrency,
    );

    this.result = this.currencyConverterService.convertCurrency(
      normalizedAmount,
      this.sourceCurrency,
      this.targetCurrency,
    );
  }

  isValidAmount(): boolean {
    return this.amount !== null && this.amount !== undefined && this.amount !== '' && Number.isFinite(Number(this.amount));
  }

  getFlagAndCurrency(currency: string): string {
    return `${this.currencyFlags[currency] || ''} ${currency}`;
  }
}
