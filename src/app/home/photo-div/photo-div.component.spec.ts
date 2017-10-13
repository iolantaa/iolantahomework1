import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDivComponent } from './photo-div.component';

describe('PhotoDivComponent', () => {
  let component: PhotoDivComponent;
  let fixture: ComponentFixture<PhotoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
