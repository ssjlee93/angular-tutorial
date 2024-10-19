import { Component } from '@angular/core';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-output-wrapper',
  standalone: true,
  imports: [OutputComponent],
  templateUrl: './output-wrapper.component.html',
  styleUrl: './output-wrapper.component.css'
})
export class OutputWrapperComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
