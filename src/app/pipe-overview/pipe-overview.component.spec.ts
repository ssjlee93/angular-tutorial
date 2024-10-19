import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOverviewComponent } from './pipe-overview.component';

describe('PipeOverviewComponent', () => {
  let component: PipeOverviewComponent;
  let fixture: ComponentFixture<PipeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
