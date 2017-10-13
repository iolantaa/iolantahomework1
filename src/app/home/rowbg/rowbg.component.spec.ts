import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowbgComponent } from './rowbg.component';

describe('RowbgComponent', () => {
  let component: RowbgComponent;
  let fixture: ComponentFixture<RowbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
