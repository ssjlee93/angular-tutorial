import { Component } from '@angular/core';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [],
  // templateUrl: './initial.component.html',
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  styleUrl: './initial.component.css'
})
export class InitialComponent {
  city = "New York"
}
