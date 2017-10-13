import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsphotoComponent } from './contactsphoto.component';

describe('ContactsphotoComponent', () => {
  let component: ContactsphotoComponent;
  let fixture: ComponentFixture<ContactsphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
