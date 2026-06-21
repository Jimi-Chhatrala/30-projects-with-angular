import { Component, signal } from '@angular/core';
import { HoverHighlight } from './directives/hover-highlight';
import { TextTransform } from './directives/text-transform';
import { ClickOutside } from './directives/click-outside';
import { FocusOn } from './directives/focus-on';

@Component({
  selector: 'app-root',
  imports: [HoverHighlight, TextTransform, ClickOutside, FocusOn],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('15-custom-directives');
}
