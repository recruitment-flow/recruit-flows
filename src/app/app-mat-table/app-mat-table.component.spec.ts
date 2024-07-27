import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMatTableComponent } from './app-mat-table.component';

describe('AppMatTableComponent', () => {
  let component: AppMatTableComponent;
  let fixture: ComponentFixture<AppMatTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMatTableComponent]
    });
    fixture = TestBed.createComponent(AppMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
