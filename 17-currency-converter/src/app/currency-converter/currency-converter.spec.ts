import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverter } from './currency-converter';

describe('CurrencyConverter', () => {
  let component: CurrencyConverter;
  let fixture: ComponentFixture<CurrencyConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep the amount unchanged for the same currency', () => {
    component.amount = 100;
    component.sourceCurrency = 'USD';
    component.targetCurrency = 'USD';

    component.convertCurrency();

    expect(component.result).toBe(100);
    expect(component.conversionRate).toBe(1);
  });

  it('should reset the result for empty or invalid input', () => {
    component.amount = '';
    component.sourceCurrency = 'USD';
    component.targetCurrency = 'EUR';

    component.convertCurrency();

    expect(component.result).toBe(0);
    expect(component.conversionRate).toBeNull();
  });
});
