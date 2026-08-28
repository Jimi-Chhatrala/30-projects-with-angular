import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemePickerComp } from './theme-picker-comp';

describe('ThemePickerComp', () => {
  let component: ThemePickerComp;
  let fixture: ComponentFixture<ThemePickerComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePickerComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemePickerComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
