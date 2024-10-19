import { Component } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-constructor',
  standalone: true,
  imports: [],
  templateUrl: './constructor.component.html',
  styleUrl: './constructor.component.css'
})
export class ConstructorComponent {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
