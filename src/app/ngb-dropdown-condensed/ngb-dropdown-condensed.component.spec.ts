import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbDropdownCondensedComponent } from './ngb-dropdown-condensed.component';

describe('NgbDropdownCondensedComponent', () => {
  let component: NgbDropdownCondensedComponent;
  let fixture: ComponentFixture<NgbDropdownCondensedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbDropdownCondensedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbDropdownCondensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
