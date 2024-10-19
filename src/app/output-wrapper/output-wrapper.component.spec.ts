import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputWrapperComponent } from './output-wrapper.component';

describe('OutputWrapperComponent', () => {
  let component: OutputWrapperComponent;
  let fixture: ComponentFixture<OutputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
