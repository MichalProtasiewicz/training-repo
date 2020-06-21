import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReceiverComponent } from './input-receiver.component';

describe('InputReceiverComponent', () => {
  let component: InputReceiverComponent;
  let fixture: ComponentFixture<InputReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
