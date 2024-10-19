import { Component } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipe-formatting',
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './pipe-formatting.component.html',
  styleUrl: './pipe-formatting.component.css'
})
export class PipeFormattingComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
