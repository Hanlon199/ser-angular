import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoardModalComponent } from './message-board-modal.component';

describe('MessageBoardModalComponent', () => {
  let component: MessageBoardModalComponent;
  let fixture: ComponentFixture<MessageBoardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
