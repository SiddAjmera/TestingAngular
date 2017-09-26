import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {

    component = new TodoFormComponent(new FormBuilder());

  });

  //For Initialization
  it('should initialize the form with two controls on it', () => {



  });

  //For checking the validation
  it('should validate the name control', () => {

    

  });
  
});