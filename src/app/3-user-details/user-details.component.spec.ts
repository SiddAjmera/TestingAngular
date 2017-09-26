/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {

    it('should call navigate the user to the not-found page of the user with the specified userId is not found', () => {



    });

  });

  describe('save', () => {

    it('should call router.navigate with relevant arguments when called', () => {

      

    });

  });

});