import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComp } from './weather-comp';

describe('WeatherComp', () => {
  let component: WeatherComp;
  let fixture: ComponentFixture<WeatherComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComp],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
