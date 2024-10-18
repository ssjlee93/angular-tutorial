import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  // send an output to parent component by triggering an event
}
