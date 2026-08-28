import { Component, signal } from '@angular/core';
import { EmojiSearchComp } from './components/emoji-search-comp/emoji-search-comp';
import { ThemePickerComp } from './components/theme-picker-comp/theme-picker-comp';

@Component({
  selector: 'app-root',
  imports: [EmojiSearchComp, ThemePickerComp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('19-emoji-search');
}
