import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiSearchComp } from './emoji-search-comp';

describe('EmojiSearchComp', () => {
  let component: EmojiSearchComp;
  let fixture: ComponentFixture<EmojiSearchComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiSearchComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmojiSearchComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
