import { Component } from '@angular/core';
import { DeferrableViewsComponent } from '../deferrable-views/deferrable-views.component';

@Component({
  selector: 'app-deferrable-wrapper',
  standalone: true,
  imports: [DeferrableViewsComponent],
  templateUrl: './deferrable-wrapper.component.html',
  styleUrl: './deferrable-wrapper.component.css'
})
export class DeferrableWrapperComponent {

}
