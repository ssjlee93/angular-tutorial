import { Component, inject } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-inject',
  standalone: true,
  imports: [],
  templateUrl: './inject.component.html',
  styleUrl: './inject.component.css'
})
export class InjectComponent {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
