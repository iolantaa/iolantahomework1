import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsComponent } from './ends.component';

describe('EndsComponent', () => {
  let component: EndsComponent;
  let fixture: ComponentFixture<EndsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
