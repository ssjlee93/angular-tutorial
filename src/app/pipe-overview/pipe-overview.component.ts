import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-overview',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './pipe-overview.component.html',
  styleUrl: './pipe-overview.component.css'
})
export class PipeOverviewComponent {
  username = 'FUAD';
}
