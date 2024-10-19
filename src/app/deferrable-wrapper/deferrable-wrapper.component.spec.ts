import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableWrapperComponent } from './deferrable-wrapper.component';

describe('DeferrableWrapperComponent', () => {
  let component: DeferrableWrapperComponent;
  let fixture: ComponentFixture<DeferrableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferrableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
