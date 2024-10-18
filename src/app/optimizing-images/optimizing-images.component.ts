import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimizing-images',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimizing-images.component.html',
  styleUrl: './optimizing-images.component.css'
})
export class OptimizingImagesComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
