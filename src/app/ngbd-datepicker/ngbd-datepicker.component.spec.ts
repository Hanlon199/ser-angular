import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerComponent } from './ngbd-datepicker.component';

describe('NgbdDatepickerComponent', () => {
  let component: NgbdDatepickerComponent;
  let fixture: ComponentFixture<NgbdDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
