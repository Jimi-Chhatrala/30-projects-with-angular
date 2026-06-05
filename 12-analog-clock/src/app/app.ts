import { Component, signal } from '@angular/core';
import { Clock } from './clock/clock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Clock],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('12-analog-clock');
}
