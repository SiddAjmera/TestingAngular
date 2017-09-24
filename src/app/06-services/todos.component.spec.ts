import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  describe('ngOnInit', () => {

    it('should set the todos property on the component with the data returned from the observable', () => {
      
      let response = [1, 2, 3];
      spyOn(service, 'getTodos').and.returnValue(Observable.from([ response ]));
  
      component.ngOnInit();
  
      expect(component.todos).toEqual(response);
  
    });

  });

  describe('add', () => {

    it('should call service.add with request', () => {
      
      let request = { title: '... ' };
      spyOn(service, 'add').and.returnValue(Observable.empty());
  
      component.add();
  
      expect(service.add).toHaveBeenCalledWith(request);
  
    });

    it('should add the new todo returned from the server', () => {
      
      let request = { title: '... ' };
      spyOn(service, 'add').and.returnValue(Observable.from( [ request ] ));
  
      component.add();
  
      expect(component.todos).toContain(request);
  
    });

    it('should set the message property on the component class with the error', () => {
      
      let error = 'Something went wrong';
      spyOn(service, 'add').and.returnValue(Observable.throw(error));
  
      component.add();
  
      expect(component.message).toEqual(error);
  
    });

  });

  describe('delete', () => {

    it('should call the delete method of the service if the user confirms', () => {

      let id = 1;
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(service, 'delete').and.returnValue(Observable.empty());

      component.delete(id);

      expect(service.delete).toHaveBeenCalledWith(id);

    });

    it('should NOT call the delete method of the service if the user cancels', () => {

      let id = 1;
      spyOn(window, 'confirm').and.returnValue(false);
      spyOn(service, 'delete').and.returnValue(Observable.empty());

      component.delete(id);

      expect(service.delete).not.toHaveBeenCalled();

    });

  });

});