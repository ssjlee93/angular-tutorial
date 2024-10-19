import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-input-wrapper',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input-wrapper.component.html',
  styleUrl: './input-wrapper.component.css'
})
export class InputWrapperComponent {

}
