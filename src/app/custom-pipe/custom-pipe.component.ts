import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [ReversePipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
  word = 'You are a champion';
}
