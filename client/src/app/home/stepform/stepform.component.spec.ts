import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepformComponent } from './stepform.component';

describe('StepformComponent', () => {
  let component: StepformComponent;
  let fixture: ComponentFixture<StepformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
