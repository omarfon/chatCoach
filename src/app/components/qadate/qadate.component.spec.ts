import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QadateComponent } from './qadate.component';

describe('QadateComponent', () => {
  let component: QadateComponent;
  let fixture: ComponentFixture<QadateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QadateComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
