import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InitialComponent } from "./initial/initial.component";
import { UserComponent } from './user/user.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DeferrableViewsComponent } from "./deferrable-views/deferrable-views.component";
import { OptimizingImagesComponent } from './optimizing-images/optimizing-images.component';
import { FormsComponent } from './forms/forms.component';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FormsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
