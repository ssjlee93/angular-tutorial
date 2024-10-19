import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFormattingComponent } from './pipe-formatting.component';

describe('PipeFormattingComponent', () => {
  let component: PipeFormattingComponent;
  let fixture: ComponentFixture<PipeFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeFormattingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
