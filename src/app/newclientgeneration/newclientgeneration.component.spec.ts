import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewclientgenerationComponent } from './newclientgeneration.component';

describe('NewclientgenerationComponent', () => {
  let component: NewclientgenerationComponent;
  let fixture: ComponentFixture<NewclientgenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewclientgenerationComponent]
    });
    fixture = TestBed.createComponent(NewclientgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
