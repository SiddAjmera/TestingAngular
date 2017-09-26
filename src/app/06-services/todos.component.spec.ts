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
      
      
  
    });

  });

  describe('add', () => {

    it('should call service.add with request', () => {
      
      
  
    });

    it('should add the new todo returned from the server', () => {
      
      
  
    });

    it('should set the message property on the component class with the error', () => {
      
      
  
    });

  });

  describe('delete', () => {

    it('should call the delete method of the service if the user confirms', () => {

      

    });

    it('should NOT call the delete method of the service if the user cancels', () => {

      

    });

  });

});