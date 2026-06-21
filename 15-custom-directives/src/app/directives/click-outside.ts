import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutside {
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      console.log('>>> Clicked inside the element! <<<');
    } else {
      console.log('<<< Clicked outsie the element! >>>');
    }
  }
}
