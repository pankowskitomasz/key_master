/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactS1Component } from './contact-s1.component';

describe('ContactS1Component', () => {
  let component: ContactS1Component;
  let fixture: ComponentFixture<ContactS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
