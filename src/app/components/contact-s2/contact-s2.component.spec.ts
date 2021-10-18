/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactS2Component } from './contact-s2.component';

describe('ContactS2Component', () => {
  let component: ContactS2Component;
  let fixture: ComponentFixture<ContactS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
