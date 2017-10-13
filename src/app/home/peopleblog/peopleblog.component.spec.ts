import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleblogComponent } from './peopleblog.component';

describe('PeopleblogComponent', () => {
  let component: PeopleblogComponent;
  let fixture: ComponentFixture<PeopleblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
