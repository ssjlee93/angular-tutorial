import { Component, inject } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  carService = inject(CarService)
}
