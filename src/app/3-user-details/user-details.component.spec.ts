/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate(params) { }
}

class ActivatedRouteStub {

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
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

      let router = TestBed.get(Router);
      let spy = spyOn(router, 'navigate');

      let activatedRoute: ActivatedRouteStub = TestBed.get(ActivatedRoute);
      activatedRoute.push({ id: 0 });

      component.ngOnInit();

      expect(spy).toHaveBeenCalledWith(['not-found']);

    });

  });

  describe('save', () => {

    it('should call router.navigate with relevant arguments when called', () => {

      let router = TestBed.get(Router);
      let spy = spyOn(router, 'navigate');

      component.save();

      expect(spy).toHaveBeenCalledWith(['users']);

    });

  });

});
