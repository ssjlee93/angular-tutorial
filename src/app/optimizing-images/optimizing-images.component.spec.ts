import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizingImagesComponent } from './optimizing-images.component';

describe('OptimizingImagesComponent', () => {
  let component: OptimizingImagesComponent;
  let fixture: ComponentFixture<OptimizingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizingImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
