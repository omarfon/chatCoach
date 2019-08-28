import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatonlineComponent } from './chatonline.component';

describe('ChatonlineComponent', () => {
  let component: ChatonlineComponent;
  let fixture: ComponentFixture<ChatonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatonlineComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
