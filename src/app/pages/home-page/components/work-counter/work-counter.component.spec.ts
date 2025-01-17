import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCounterComponent } from './work-counter.component';

describe('WorkCounterComponent', () => {
  let component: WorkCounterComponent;
  let fixture: ComponentFixture<WorkCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
