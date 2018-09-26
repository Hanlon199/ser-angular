import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBdDropdownBasicComponent } from './ng-bd-dropdown-basic.component';

describe('NgBdDropdownBasicComponent', () => {
  let component: NgBdDropdownBasicComponent;
  let fixture: ComponentFixture<NgBdDropdownBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBdDropdownBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBdDropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
