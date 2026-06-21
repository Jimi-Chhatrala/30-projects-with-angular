import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTransform]',
})
export class TextTransform {
  @Input() transformType: 'uppercase' | 'lowercase' = 'uppercase';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  private setTextTransform(text: string) {
    if (this.transformType === 'uppercase') {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', text.toUpperCase());
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', text.toLowerCase());
    }
  }

  ngOnInit() {
    const text = this.elementRef.nativeElement.innerText;
    this.setTextTransform(text);
  }
}
