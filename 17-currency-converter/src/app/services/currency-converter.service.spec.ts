import { TestBed } from '@angular/core/testing';

import { CurrencyConverterService } from './currency-converter.service';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the original amount when source and target currencies are the same', () => {
    expect(service.convertCurrency(100, 'USD', 'USD')).toBe(100);
    expect(service.getConversionRate('USD', 'USD')).toBe(1);
  });

  it('should return 0 for invalid amounts', () => {
    expect(service.convertCurrency(Number.NaN, 'USD', 'EUR')).toBe(0);
  });
});
