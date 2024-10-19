import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { InitialComponent } from './initial/initial.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { OutputWrapperComponent } from './output-wrapper/output-wrapper.component';
import { DeferrableWrapperComponent } from './deferrable-wrapper/deferrable-wrapper.component';
import { OptimizingImagesComponent } from './optimizing-images/optimizing-images.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'App User Page',
        component: UserComponent
    },
    {
        path: 'initial',
        title: 'App Initial Page',
        component: InitialComponent
    },
    {
        path: 'if',
        title: 'App if Page',
        component: IfComponent
    },
    {
        path: 'for',
        title: 'App for Page',
        component: ForComponent
    },
    {
        path: 'property-binding',
        title: 'App Property Binding Page',
        component: PropertyBindingComponent
    },
    {
        path: 'event-handling',
        title: 'App Event Handling Page',
        component: EventHandlingComponent
    },
    {
        path: 'input',
        title: 'App Input Page',
        component: InputWrapperComponent
    },
    {
        path: 'output',
        title: 'App Output Page',
        component: OutputWrapperComponent
    },
    {
        path: 'defer',
        title: 'App Defer Page',
        component: DeferrableWrapperComponent
    },
    {
        path: 'img',
        title: 'App Optimizing Img Page',
        component: OptimizingImagesComponent
    },
    {
        path: 'routing',
        title: 'App Routing Page',
        component: RoutingComponent
    },
    {
        path: 'forms',
        title: 'App Forms Page',
        component: FormsComponent
    },
    {
        path: 'reactive-forms',
        title: 'App Reactive Forms Page',
        component: ReactiveFormsComponent
    },
];
