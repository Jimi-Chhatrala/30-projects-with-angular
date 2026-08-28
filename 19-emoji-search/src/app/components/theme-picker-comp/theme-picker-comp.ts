import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-theme-picker-comp',
  styleUrl: './theme-picker-comp.scss',
  templateUrl: './theme-picker-comp.html',
})
export class ThemePickerComp {
  setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
}
