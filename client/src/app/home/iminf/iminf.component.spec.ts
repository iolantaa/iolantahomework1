import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IminfComponent } from './iminf.component';

describe('IminfComponent', () => {
  let component: IminfComponent;
  let fixture: ComponentFixture<IminfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IminfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IminfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
